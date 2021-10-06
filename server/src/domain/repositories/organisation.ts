import { OrganisationEntity } from '@/domain/entities';
import { PrismaClient } from '@prisma/client';

export class OrganisationRepository {
  async loadOrganisation(id: string): Promise<OrganisationEntity> {
    const { organisation } = new PrismaClient();
    return OrganisationEntity.map(
      await organisation.findFirst({
        where: {
          id: {
            equals: id,
          },
        },
      }),
    );
  }

  async createOrganisation(data: OrganisationEntity): Promise<string> {
    const { organisation } = new PrismaClient();
    const entity = OrganisationEntity.map(
      await organisation.create({
        data: {
          name: data.name
        },
      }),
    );
    return entity?.id;
  }
}
