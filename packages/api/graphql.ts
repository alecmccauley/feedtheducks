import "reflect-metadata";
import { buildSchemaSync } from "type-graphql";
import FeedingResolver from "./src/resolvers/feeding";
import { ApolloServer } from "apollo-server-lambda";

// scaffold the GraphQL server. We are creating and storing the schema in a NodeJS global
// so that it will be cached between runs.
(global as any).schema =
  (global as any).schema ||
  buildSchemaSync({
    resolvers: [FeedingResolver],
  });
const server = new ApolloServer({
  schema: (global as any).schema,
  playground: {
    endpoint: "/dev/graphql",
  },
});

exports.graphqlHandler = server.createHandler();
