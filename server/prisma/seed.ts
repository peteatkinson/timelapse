import { PrismaClient, Prisma } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';
const prisma = new PrismaClient();


const organisationData = [
  {
    id: '67877aab-e235-431a-b960-8da259414d0c',
    name: 'Coca-Cola Inc.'
  }, 
  {
    id: '3bad9076-dfb0-439d-8e36-9406909bedbb',
    name: 'Pepsi Co'
  },
  {
    id: '2e37ffc4-008c-4640-9130-0980de1fb648',
    name: 'Walmart'
  },
  {
    id: '0e3bf95c-6107-4837-9878-f05d1b7286ed',
    name: 'Mcdonalds'
  },
  {
    id: 'da5985e5-c0c2-44a7-bfd4-e3b5ebf452c0',
    name: 'Amazon'
  }
]

async function main() {
  await addOrganisationData();
  await addDepartmentData();
}

async function addOrganisationData() {
  console.log("Seeding Organisation table with test data...");
  for(let organisation of organisationData) {
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

const departmentNames = [
  "Web Department",
  "Sales",
  "Complaints Handling",
  "Marketing",
  "Customer Services"
]

async function addDepartmentData() {
  let departmentData = [];
  organisationData.forEach((o) => {
    const organisationId = o.id;
    departmentData.push(departmentNames.map((d) => {
      return {
        id: uuidv4(),
        organisationId: organisationId,
        name: d,
        createdAt: new Date().toISOString()
      }
    }))
  }
  )

  departmentData = [].concat(...departmentData)
  console.log(departmentData);

  console.log("Seeding Departmnet table with test data...");
  
  for(let department of departmentData) {
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
