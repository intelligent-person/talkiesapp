import { PrismaClient, User } from '@prisma/client';
import { CookieSerializeOptions, serialize } from 'cookie';
import prisma from '../../prisma/prisma';
import { getSession } from 'next-auth/react';

export interface Context {
  currentUser: Omit<User, 'password'> | null
  prisma: PrismaClient
  setCookies: (tokenName: string, token: string, options?: CookieSerializeOptions) => void
}

export async function createContext (request: any, response: any): Promise<Context> {
  return {
    prisma,
    currentUser: await getSession({ req: request }) as Omit<User, 'password'> | null,
    setCookies: (tokenName, token, options) =>
      response.setHeader('Set-Cookie', serialize(tokenName, token, { path: '/', httpOnly: true, ...options }))
  };
}
