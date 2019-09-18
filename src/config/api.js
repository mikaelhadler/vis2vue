import faker from "faker/locale/pt_BR";
// import { Service } from "./http-client";

export async function GetGroups() {
  return resolvePromise(mockGroups);
}

export async function GetSubGroups() {
  return resolvePromise(mockSubGroups);
}

const resolvePromise = value => new Promise(resolve => resolve(value));

const mockGroups = [
  {
    id: 0,
    content: faker.commerce.department()
  },
  {
    id: 1,
    content: faker.commerce.department()
  },
  {
    id: 2,
    content: faker.commerce.department()
  },
  {
    id: 3,
    content: faker.commerce.department()
  }
];

const mockSubGroups = [
  {
    id: faker.random.uuid(),
    group: 0,
    start: faker.date.recent(),
    content: faker.commerce.product()
  },
  {
    id: faker.random.uuid(),
    group: 0,
    start: faker.date.recent(),
    content: faker.commerce.product()
  },
  {
    id: faker.random.uuid(),
    group: 0,
    start: faker.date.recent(),
    content: faker.commerce.product()
  },
  {
    id: faker.random.uuid(),
    group: 1,
    start: faker.date.recent(),
    content: faker.commerce.product()
  },
  {
    id: faker.random.uuid(),
    group: 1,
    start: faker.date.recent(),
    content: faker.commerce.product()
  },
  {
    id: faker.random.uuid(),
    group: 1,
    start: faker.date.recent(),
    content: faker.commerce.product()
  },
  {
    id: faker.random.uuid(),
    group: 3,
    start: faker.date.recent(),
    content: faker.commerce.product()
  },
  {
    id: faker.random.uuid(),
    group: 3,
    start: faker.date.recent(),
    content: faker.commerce.product()
  },
  {
    id: faker.random.uuid(),
    group: 3,
    start: faker.date.recent(),
    content: faker.commerce.product()
  }
];
