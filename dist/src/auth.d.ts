import { User } from '@prisma/client';
export declare function getAuthorizedUser(request: any): Promise<Omit<User, 'password'> | null>;
