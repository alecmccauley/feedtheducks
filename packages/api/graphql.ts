import "reflect-metadata";
import { buildSchemaSync } from "type-graphql";
import { FeedingResolver } from "./src/resolvers/feeding";
import { ApolloServer } from "apollo-server-lambda";
import * as TypeORM from "typeorm";
import { Container } from "typedi";
import { Database } from "./database";
import { RecurringFeedingResolver } from "./src/resolvers/recurringFeeding";

// register 3rd party IOC container
TypeORM.useContainer(Container);

const createHandler = async () => {
  const db = new Database();
  await db.getConnection();

  // scaffold the GraphQL server. We are creating and storing the schema in a NodeJS global
  // so that it will be cached between runs.
  (global as any).schema =
    (global as any).schema ||
    buildSchemaSync({
      resolvers: [FeedingResolver, RecurringFeedingResolver],
      container: Container,
    });
  const server = new ApolloServer({
    schema: (global as any).schema,
    playground: {
      endpoint: "/dev/graphql",
    },
  });

  return server.createHandler();
};

export const graphqlHandler = (event, context, callback) => {
  createHandler().then((handler) => handler(event, context, callback));
};
