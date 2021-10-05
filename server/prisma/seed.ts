import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

import { departmentData, organisationData } from './db-data'

async function main() {
  await addOrganisationData();
  await addDepartmentData();
}

async function addOrganisationData() {
  console.log("Seeding Organisation table with test data...");
  for(const organisation of organisationData) {
    const existingOrganisation = await prisma.organisation.findFirst({where: {
      id: {
        equals: organisation.id
      }
    }})
    if(!existingOrganisation) {
      await prisma.organisation.create({data: organisation});
    }
  }
}


async function addDepartmentData() {
  console.log("Seeding Departmnet table with test data...");
  
  for(const department of departmentData) {
    const existingDepartment = await prisma.department.findFirst({where: {
      id: {
        equals: department.id
      }
    }})
    if(!existingDepartment) {
      await prisma.department.create({data: department})
    }
  }
}

main().catch((e) => {
  console.log(e);
  process.exit(1);
}).finally(() => {
  prisma.$disconnect();
})
