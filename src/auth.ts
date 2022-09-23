import { PrismaClient, User } from '@prisma/client';
import { JwtPayload, verify } from 'jsonwebtoken';
import { authOptions } from './pages/api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth';

export async function authenticateUser (prisma: PrismaClient, request, response): Promise<User | null> {
  const session = await unstable_getServerSession(request, response, authOptions);
  if (session) {
    const user = await prisma.user.findUnique({
      where: {
        isUserExists: {
          email: session?.user?.email,
          provider: session.provider
        }
      }
    });
    return user;
  }
  if (request?.cookies?.token) {
    const token = request?.cookies?.token;
    const tokenPayload = verify(token, process.env.APP_SECRET) as JwtPayload;
    const userId = tokenPayload.userId;
    return await prisma.user.findUnique({ where: { id: userId } });
  }
  return null;
}
