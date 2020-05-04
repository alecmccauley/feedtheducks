if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

import { ApolloServer } from "apollo-server-express";
import Express from "express";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import * as http from "http";
import { FeedingResolver } from "./src/resolvers/feeding";
import * as TypeORM from "typeorm";
import { Container } from "typedi";
import { Database } from "./database";
import { RecurringFeedingResolver } from "./src/resolvers/recurringFeeding";

// register 3rd party IOC container
TypeORM.useContainer(Container);

const PORT = process.env.PORT || 4000;

const main = async () => {
  const db = new Database();
  await db.getConnection();

  // build GraphQL schema
  const schema = await buildSchema({
    resolvers: [FeedingResolver, RecurringFeedingResolver],
    container: Container,
  });

  // create GraphQL server
  const apolloServer = new ApolloServer({ schema });

  // integrate GraphQL server with Express and start the server
  const app = Express();

  apolloServer.applyMiddleware({ app });

  const httpServer = http.createServer(app);
  apolloServer.installSubscriptionHandlers(httpServer);

  httpServer.listen(PORT, () => {
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`
    );
    console.log(
      `🚀 Subscriptions ready at ws://localhost:${PORT}${apolloServer.subscriptionsPath}`
    );
  });
};

main();
