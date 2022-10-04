import { PrismaClient, User } from '@prisma/client';
import { getAuthorizedUser } from '../../src/auth';
import { CookieSerializeOptions, serialize } from 'cookie';
import prisma from '../../prisma/prisma';

export interface Context {
  currentUser: Omit<User, 'password'> | null
  prisma: PrismaClient
  setCookies: (tokenName: string, token: string, options?: CookieSerializeOptions) => void
}

export async function createContext (request: any, response: any): Promise<Context> {
  return {
    prisma,
    currentUser: await getAuthorizedUser(request),
    setCookies: (tokenName, token, options) =>
      response.setHeader('Set-Cookie', serialize(tokenName, token, { path: '/', httpOnly: true, ...options }))
  };
}
