import { Department } from '.prisma/client';
import prisma from '@/lib/prisma';
import { equal } from 'assert';

export class DepartmentRepository {
  async loadDepartment(id: string): Promise<Department> {
    return await prisma.department.findFirst({
      where: {
        id: {
          equals: id,
        },
      },
    });
  }

  async loadDepartments(organisationId: string): Promise<Department[]> {
    return await prisma.department.findMany({
      where: {
        organisationId: {
          equals: organisationId,
        },
      },
    });
  }

  async createDepartment(department: Department): Promise<Department> {
    return await prisma.department.create({ data: department });
  }
}
