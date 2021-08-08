import { AddPasswordRepository } from '@/data/protocols'
import { MongoHelper } from '@/infra/db'

export class PasswordMongoRepository implements AddPasswordRepository {
  async add (data: AddPasswordRepository.Params): Promise<AddPasswordRepository.Result> {
    const accountCollection = await MongoHelper.getCollection('passwords')
    const result = await accountCollection.insertOne(data)
    return result.ops[0] !== null
  }
}
