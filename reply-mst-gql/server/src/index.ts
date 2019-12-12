import { ApolloServer, gql } from "apollo-server";
import mongoose from "mongoose";

import * as controllers from "./controllers";
import { commentModel } from "./models";
import { typeDefs, resolvers } from "./graphql";

//mongoURI=mongodb://localhost:27017/sample1
mongoose
  .connect("mongodb://localhost:27017/repllymee")
  .then(() => console.log("Mongo on"))
  .catch(err => console.log(err));

const { createCreateCommentDB } = controllers;
const context = async session => {
  return {
    createComment: createCreateCommentDB(commentModel)
  };
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

// export all the important pieces for integration/e2e tests to use

export { ApolloServer, typeDefs, resolvers, controllers };
// dataSources,
// context,
// typeDefs,
// resolvers,
// ApolloServer,
// LaunchAPI,
// UserAPI,
// store,
// server,
