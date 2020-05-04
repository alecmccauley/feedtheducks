import { graphql, GraphQLSchema } from "graphql";
import { MongoMemoryServer } from "mongodb-memory-server";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { Container } from "typedi";
import * as TypeORM from "typeorm";
import Feeding from "./../types/feeding";
import RecurringFeeding from "./../types/recurringFeeding";
import { FeedingResolver } from "./feeding";
import { RecurringFeedingResolver } from "./recurringFeeding";
import AddFeedingInput from "./types/AddFeedingInput";

// register 3rd party IOC container

let schema: GraphQLSchema;
let id: string;
let db: TypeORM.Connection;
const mongodb = new MongoMemoryServer();

beforeAll(async () => {
  mongodb.start();

  TypeORM.useContainer(Container);
  const port = await mongodb.getPort();
  const database = await mongodb.getDbName();

  db = await TypeORM.createConnection({
    type: "mongodb",
    database,
    port,
    synchronize: true,
    entities: [Feeding, RecurringFeeding],
  });

  schema = await buildSchema({
    resolvers: [FeedingResolver, RecurringFeedingResolver],
    validate: true,
    container: Container,
  });
});

test("Feeding Resolver - allows mutations and returns proper results", async () => {
  const mutation = `  mutation AddFeeding($data: AddFeedingInput!) {
    addFeeding(data: $data) {
      id
      numberOfDucks
      location {
        lat
        lng
      }
      name
    }
  }`;

  const data: AddFeedingInput = {
    name: "Test Person",
    lat: 100,
    lng: 100,
    numberOfDucks: 300,
    howMuchFood: 200,
    typeOfFood: "Seeds",
    dateTime: new Date(),
    recurring: true,
  };

  const results = await graphql(schema, mutation, null, null, {
    data,
  });

  expect(results.errors).toBe(undefined);
  expect(results.data.addFeeding.name).toBe("Test Person");

  id = results.data.addFeeding.id;
});

test("Recurring feeding was added.", async () => {
  const results = await db.getRepository(RecurringFeeding).find();
  expect(results.length).toBe(1);
});

afterAll(async () => {
  await mongodb.stop();
});
