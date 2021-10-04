import { organisationData }  from './organisations';
import { v4 as uuidv4 } from 'uuid';

const departmentNames = [
  'Web Department',
  'Sales',
  'Complaints Handling',
  'Marketing',
  'Customer Services',
];

let departmentData = [];
organisationData.forEach((o) => {
  const organisationId = o.id;
  departmentData.push(
    departmentNames.map((d) => {
      return {
        id: uuidv4(),
        organisationId: organisationId,
        name: d,
        createdAt: new Date().toISOString(),
      };
    }),
  );
});

departmentData = [].concat(...departmentData)

export { departmentData };
