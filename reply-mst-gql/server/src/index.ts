import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Comment {
    id: ID!
    message: String
    replyToID: String
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
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
