import { Controller } from '@/presentation/protocols'
import { CreateOrganisationController } from '@/presentation/controllers'
import { CreateOrganisationCommandHandler } from '@/commands/create-organisation';
import { OrganisationRepository } from '@/domain/repositories/organisation';

export const makeCreateOrganisationController = (): Controller => {
  const organisationRepository = new OrganisationRepository();
  const organisationCommandHandler = new CreateOrganisationCommandHandler(organisationRepository);
  return new CreateOrganisationController(organisationCommandHandler);
}