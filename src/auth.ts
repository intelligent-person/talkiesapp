import { JwtPayload, verify } from 'jsonwebtoken';
import prisma from '../prisma/prisma';
import { prismaExclude } from 'prisma-exclude';
import { User } from '@prisma/client';
import { getSession } from 'next-auth/react';

const APP_SECRET = process.env.APP_SECRET as string;
const exclude = prismaExclude(prisma);

export async function getAuthorizedUser (
  request: any
): Promise<Omit<User, 'password'> | null> {
  const session = await getSession({ req: request });
  if (session) {
    const user = await prisma.user.findUnique({
      select: exclude('user', ['password']),
      where: {
        isUserExists: {
          email: session?.user?.email as string,
          provider: session.provider as string
        }
      }
    });
    return user;
  }
  if (request?.cookies?.token) {
    const token = request?.cookies?.token;
    const tokenPayload = verify(token, APP_SECRET) as JwtPayload;
    const userId = tokenPayload.userId;
    const user = await prisma.user.findUnique({
      select: exclude('user', ['password']),
      where: {
        id: userId
      }
    });
    return user;
  }
  return null;
}
