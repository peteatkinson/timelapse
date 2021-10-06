import { QueryHandler } from "./core";
import { Organisation } from '@/presentation/models';
import { OrganisationRepository } from "@/domain/repositories/organisation";

export interface GetOrganisationById extends QueryHandler<Types.Params, Organisation>{}

export class GetOrganisationByIdHandler implements GetOrganisationById {
  constructor(private readonly organisationRepository: OrganisationRepository) { }
  
  async handle (query?: Types.Params): Promise<Organisation> {
    const organisationId = query;
    const organisation =  await this.organisationRepository.loadOrganisation(organisationId);
    if(!organisation) {
      return null;
    }
    return new Organisation(organisation.id, organisation.name);
  }
}

export namespace Types {
  export type Params = string
}