import prisma from '@/lib/prisma';
import { Organisation } from '.prisma/client';

export class OrganisationRepository {
  async loadOrganisation(id: string): Promise<Organisation> {
    return await prisma.organisation.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
    });
  }

  async createOrganisation(organisation: Organisation): Promise<Organisation> {
    return await prisma.organisation.create({data: organisation});
  }
}
