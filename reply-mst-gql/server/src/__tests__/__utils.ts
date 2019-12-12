// find a work around here, should not spawn mongo service
//import { ApolloServer, typeDefs, resolvers, core } from "../";

import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "../graphql";

const contructTestServer = ({ context = {} }) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: session => context
  });

  return { server, context };
};

export { contructTestServer };
