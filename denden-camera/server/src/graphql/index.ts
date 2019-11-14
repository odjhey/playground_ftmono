import { gql } from "apollo-server";
import {
  createWriteStream,
  existsSync,
  mkdirSync,
  createReadStream,
  fstat,
  writeFile
} from "fs";
import path from "path";
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    id: ID!
    title: String
    author: String
    checkin: Boolean
    isDeleted: Boolean
  }

  type User {
    id: ID!
    name: String
    checkin: Boolean
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).

  type Query {
    books: [Book]
    users: [User]
    files: [String]
  }

  type File {
    file: String
  }

  type Mutation {
    createBook(title: String, author: String, checkin: Boolean): Book
    updateBook(id: ID, title: String, author: String, checkin: Boolean): Book
    deleteBook(id: ID): Book
    checkin(id: ID, checkin: Boolean): [Book]
    createUser(name: String): User
    userCheckin(id: ID!): User
    uploadFile(file: Upload!): File
  }
`;
const files = [];
// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    files: () => {
      return files;
    },
    books: async (_, __, { Book }) => {
      const books = Book.find();
      return books;
    },
    users: async (_, __, { User }) => {
      const users = User.find();
      return users;
    }
  },
  Mutation: {
    createBook: async (_, { title, author, checkin }, { Book }) => {
      const newBook = await new Book({ title, author, checkin });
      return newBook.save();
    },
    updateBook: async (_, { id, title, author, checkin }, { Book }) => {
      const book = await Book.findOneAndUpdate(
        { _id: id },
        { title, author, checkin },
        { new: true }
      );
      return book;
    },
    deleteBook: async (_, { id }, { Book }) => {
      const book = await Book.findOneAndRemove({
        _id: id
      });
      if (!book) throw new Error("Nothing found.");
      const { _id, title, author, checkin } = book;
      return { id: _id, title, author, checkin, isDeleted: true };
    },
    createUser: async (_, { name }, { User }) => {
      const newUser = await new User({ name });
      return newUser.save();
    },
    userCheckin: async (_, { id }, { User }) => {
      const user = await User.findOne({ _id: id });
      const updatedUser = await User.findOneAndUpdate(
        { _id: id },
        { checkin: !user.checkin },
        { new: true }
      );
      return updatedUser;
    },
    uploadFile: async (_, { file }) => {
      const { fileName } = await file;

      writeFile(
        path.join(__dirname, "../images", fileName),
        file.data,
        { encoding: "base64" },
        function(err) {
          console.log(err);
        }
      );

      return fileName;
    }
  }
};
existsSync(path.join(__dirname, "../images")) ||
  mkdirSync(path.join(__dirname, "../images"));
export { typeDefs, resolvers };
