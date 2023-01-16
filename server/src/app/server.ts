// TODO: Future -- try using an Apollo GraphQL server
// import { ApolloServer } from "apollo-server-express";
// import { typeDefs } from "../../typeDefs";
// import { resolvers } from "../../resolvers";

// export const server = new ApolloServer({
//   // These will be defined for both new or existing servers
//   typeDefs,
//   resolvers,
//   context: ({ req, res }: any) => ({ req, res })
// });

import { Express } from 'express'

export const server = (
  app: Express,
): Express => {
  app.get('/', (req: any, res: any) => {
    res.send('Hello kittens!\n');
  });
  return app;
};
