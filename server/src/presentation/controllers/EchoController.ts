import { DepartmentRepository } from '@/domain/repositories/department';
import { HttpResponse, Controller } from '@/presentation/protocols'

import { PrismaClient } from '@prisma/client';

export class EchoController implements Controller {
  async handle (id: string): Promise<HttpResponse> {
    const departmentRepository = new DepartmentRepository();
    const departments = await departmentRepository.loadDepartments('67877aab-e235-431a-b960-8da259414d0c');

    return {
      statusCode: 200,
      body: departments
    }
  }
}