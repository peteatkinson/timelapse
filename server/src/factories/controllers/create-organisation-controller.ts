import { Controller } from '@/presentation/protocols'
import { CreateOrganisationController } from '@/presentation/controllers'

export const makeCreateOrganisationController = (): Controller => {
  return new CreateOrganisationController();
}