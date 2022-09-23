import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Github from 'next-auth/providers/github';
import prisma from '../../../../prisma/prisma';

export const authOptions: NextAuthOptions = {
  providers: [
    Github({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      clientId: `${process.env.GITHUB_ID}`,
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      clientSecret: `${process.env.GITHUB_SECRET}`
    }),
    GoogleProvider({
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      clientId: `${process.env.GOOGLE_CLIENT_ID}`,
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`
    })
  ],
  callbacks: {
    async jwt ({ token, user, account }) {
      if (user) {
        return { ...token, provider: account?.provider };
      }

      return token;
    },
    async session ({ session, token }) {
      session.provider = token.provider;
      return session;
    },
    async signIn ({ user, account, profile, email, credentials }) {
      if (user) {
        const existUser = await prisma.user.findUnique({
          where: {
            isUserExists: {
              email: user.email,
              provider: account.provider
            }
          }
        });
        if (existUser) {
          return true;
        }
        await prisma.user.create({
          data: {
            email: user.email,
            name: user.name,
            provider: account.provider,
            image: user.image
          }
        });
      }

      return true;
    }
  },
  pages: {
    signIn: '/login'
  }
};

export default NextAuth(authOptions);
