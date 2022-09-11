import { PrismaClient, User } from '@prisma/client'
import { JwtPayload, verify } from 'jsonwebtoken'

export async function authenticateUser (prisma: PrismaClient, request): Promise<User | null> {
  if (request?.cookies?.token) {
    const token = request?.cookies?.token
    const tokenPayload = verify(token, process.env.APP_SECRET) as JwtPayload
    const userId = tokenPayload.userId
    return await prisma.user.findUnique({ where: { id: userId } })
  }

  return null
}
