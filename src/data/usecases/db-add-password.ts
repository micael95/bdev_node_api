import { AddPassword } from '@/domain/usecases'
import { AddPasswordRepository, Encrypter } from '@/data/protocols'

export class DbAddPassword implements AddPassword {
  constructor (
    private readonly addPasswordRepository: AddPasswordRepository,
    private readonly encrypter: Encrypter
  ) {
  }

  async add (passwordData: AddPassword.Params): Promise<AddPassword.Result> {
    const hashedPassword = await this.encrypter.encrypt(passwordData.password)
    return await this.addPasswordRepository.add({
      ...passwordData,
      password: hashedPassword
    })
  }
}
