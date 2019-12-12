import { ApolloServer, gql } from "apollo-server";
import mongoose from "mongoose";

import { createComment } from "./controllers";
import { typeDefs, resolvers } from "./graphql";

//mongoURI=mongodb://localhost:27017/sample1
mongoose
  .connect("mongodb://localhost:27017/repllymee")
  .then(() => console.log("Mongo on"))
  .catch(err => console.log(err));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: session => {
    return {
      createComment
    };
  }
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
