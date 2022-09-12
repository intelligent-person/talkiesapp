import { z } from 'zod';

export const authSchema = z.object({
  email: z.string().email({ message: 'Please, enter email' }),
  password: z.string().min(6, { message: 'Password is too short' })
});
