import faker from 'faker';
import { OrganisationEntity } from '../entities';

export const mockOrganisationEntity = (): OrganisationEntity => ({
  name: faker.company.name()
})