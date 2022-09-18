import { PrismaClient, User } from '@prisma/client';
import { JwtPayload, verify } from 'jsonwebtoken';
import { getSession } from 'next-auth/react';

export async function authenticateUser (prisma: PrismaClient, request): Promise<User | null> {
  const session = await getSession({ req: request });
  if (session) {
    const user = await prisma.user.findUnique({
      where: {
        isUserExists: {
          email: session?.user?.email,
          provider: session.provider
        }
      }
    });
    console.log(user);
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
