import { PrismaClient, User } from '@prisma/client';
import { CookieSerializeOptions } from 'cookie';
export interface Context {
    currentUser: Omit<User, 'password'> | null;
    prisma: PrismaClient;
    setCookies: (tokenName: string, token: string, options?: CookieSerializeOptions) => void;
}
export declare function createContext(request: any, response: any): Promise<Context>;
