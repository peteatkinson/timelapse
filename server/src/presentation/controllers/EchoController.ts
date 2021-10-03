import { HttpResponse, Controller } from '@/presentation/protocols'

import { PrismaClient } from '@prisma/client';

export class EchoController implements Controller {
  async handle (text: string): Promise<HttpResponse> {

    const { department } = new PrismaClient()
    const departments = await department.findMany({
      where: {
        organisationId: {
          equals: '00d9f061-e243-4721-b174-7e0bd577cf14'
        }
      }
    })

    return {
      statusCode: 200,
      body: departments
    }
  }
}