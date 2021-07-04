import { adaptResolver } from '@/main/adapters'
import { makeSignUpController } from '@/main/factories'

export default {
  Mutation: {
    signUp: async (parent: any, args: any) => adaptResolver(makeSignUpController(), args)
  }
}
