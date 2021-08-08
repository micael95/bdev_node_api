
import { ValidationComposite, RequiredFieldValidation } from '@/validation/validators'
import { Validation } from '@/presenters/protocols'

export const makePasswordValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['description', 'categoryId', 'password']) {
    validations.push(new RequiredFieldValidation(field))
  }

  return new ValidationComposite(validations)
}
