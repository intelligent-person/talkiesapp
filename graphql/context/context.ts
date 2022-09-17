import { PrismaClient, User } from '@prisma/client';
import { authenticateUser } from '../../src/auth';
import { CookieSerializeOptions, serialize } from 'cookie';
import prisma from '../../prisma/prisma';

export interface Context {
  currentUser: User | null
  prisma: PrismaClient
  setCookies: (tokenName: string, token: string, options?: CookieSerializeOptions) => void
}

export async function createContext (request, response): Promise<Context> {
  return {
    prisma,
    currentUser: await authenticateUser(prisma, request),
    setCookies: (tokenName, token, options) =>
      response.setHeader('Set-Cookie', serialize(tokenName, token, { path: '/', httpOnly: true, ...options }))
  };
}
