import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Github from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '../../../../prisma/prisma';
import { prismaExclude } from 'prisma-exclude';
import { User } from '@prisma/client';
import { compare } from 'bcryptjs';
const exclude = prismaExclude(prisma);

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
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' }
      },
      async authorize (credentials, request) {
        if (credentials?.email) {
          const user: User | null = await prisma.user.findUnique({
            where: {
              email: credentials.email
            }
          });

          if (!user) {
            throw new Error('No such user found');
          }

          const valid = await compare(credentials.password, user.password as string);
          if (!valid) {
            throw new Error('Invalid password');
          }
          return user;
        }

        return null;
      }
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

      session.user = await prisma.user.findUnique({
        select: exclude('user', ['password']),
        where: {
          email: session?.user?.email as string
        }
      }) as Omit<User, 'password'>;

      return session;
    },
    async signIn ({ user, account }) {
      if (user) {
        const existUser = await prisma.user.findUnique({
          where: {
            email: user.email as string
          }
        });

        if (existUser) {
          return true;
        }

        await prisma.user.create({
          data: {
            email: user.email as string,
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
  },
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.APP_SECRET
};

export default NextAuth(authOptions);
