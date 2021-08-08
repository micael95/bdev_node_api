import { AddPassword } from '@/domain/usecases'
import { JwtAdapter } from '@/infra/cryptography'
import env from '@/main/config/env'
import { PasswordMongoRepository } from '@/infra/db/mongodb/password-mongo-repository'
import { DbAddPassword } from '@/data/usecases/db-add-password'

export const makeDbAddPassword = (): AddPassword => {
  const encryptAdapter = new JwtAdapter(env.jwtSecret)
  const passwordMongoRepo = new PasswordMongoRepository()
  return new DbAddPassword(passwordMongoRepo, encryptAdapter)
}
