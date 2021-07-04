import { makeDbLoadAccountByToken } from '@/main/factories'
import { Middleware } from '@/presenters/protocols'
import { AuthMiddleware } from '@/presenters/middlewares'

export const makeAuthMiddleware = (role?: string): Middleware => {
  return new AuthMiddleware(makeDbLoadAccountByToken(), role)
}
