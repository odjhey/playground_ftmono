import { ApolloServer, gql } from "apollo-server";
import mongoose from "mongoose";

import { commentModel } from "./models";

const typeDefs = gql`
  type Comment {
    id: ID!
    message: String
    replyTo: Comment
  }

  type Query {
    comments: [Comment]
  }
`;

const comments = [
  {
    id: "1",
    message: "hello world",
    replyToID: ""
  },
  {
    id: "2",
    message: "wazzap",
    replyToID: "1"
  }
];

const resolvers = {
  Query: {
    comments: () => comments
  },
  Comment: {
    replyTo: parent => {
      const replyToComment = comments.filter(c => parent.replyToID == c.id);
      return replyToComment.length > 0 ? replyToComment[0] : undefined;
    }
  }
};

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
      commentModel
    };
  }
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
