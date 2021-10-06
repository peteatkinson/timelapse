import { Controller } from '@/presentation/protocols'
import { GetOrganisationController } from '@/presentation/controllers'
import { OrganisationRepository } from '@/domain/repositories/organisation';
import { GetOrganisationByIdHandler } from '@/queries';

export const makeGetOrganisationController = (): Controller => {
  const organisationRepository = new OrganisationRepository();
  const organisationQueryHandler = new GetOrganisationByIdHandler(organisationRepository);
  return new GetOrganisationController(organisationQueryHandler);
}