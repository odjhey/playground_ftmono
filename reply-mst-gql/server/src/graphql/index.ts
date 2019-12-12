import { gql } from "apollo-server";

const typeDefs = gql`
  type Comment {
    id: ID!
    message: String
    replyTo: Comment
  }

  type Query {
    comments: [Comment]
  }

  type Mutation {
    createComment(comment: createCommentInput!): Comment
  }

  input createCommentInput {
    message: String
  }
`;

const resolvers = {
  Query: {
    comments: () => []
  },
  Comment: {
    replyTo: (parent, args, context, info) => {
      const { comments } = context;
      const replyToComment = comments.filter(c => parent.replyToID == c.id);
      return replyToComment.length > 0 ? replyToComment[0] : undefined;
    }
  },
  Mutation: {
    createComment: (_, { comment }, context, info) => {
      const { createComment } = context;
      return createComment(comment);
    }
  }
};

export { typeDefs, resolvers };
