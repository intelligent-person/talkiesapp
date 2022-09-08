import {PrismaClient, User} from '@prisma/client'
import {authenticateUser} from "../../src/auth";
import {CookieSerializeOptions, serialize} from "cookie";
import {prisma} from "../../prisma/prisma";

export type Context = {
  currentUser: User
  prisma: PrismaClient
  setCookies: (tokenName: string, token: string, options?: CookieSerializeOptions) => void
}

export async function createContext(req, res): Promise<Context> {
  return {
    prisma,
    currentUser: await authenticateUser(prisma, req),
    setCookies: (tokenName, token, options) =>
      res.setHeader('Set-Cookie', serialize(tokenName, token, { path: '/', httpOnly: true, ...options }))
  }
}