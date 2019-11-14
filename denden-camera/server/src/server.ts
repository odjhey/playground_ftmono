require("dotenv").config();

import { ApolloServer } from "apollo-server-express";
import express from "express";
import path from "path";
import mongoose from "mongoose";
import { Book, User } from "./models";
import { resolvers, typeDefs } from "./graphql";
import bodyParser from "body-parser";

// Database
mongoose.set("useFindAndModify", false);
const { mongoURI: db } = process.env;

mongoose
  .connect(db || "", {
    useCreateIndex: true,
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return {
      Book,
      User
    };
  }
});
const app = express();

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use("/images", express.static(path.join(__dirname, "../images")));
server.applyMiddleware({ app });
// The `listen` method launches a web server.
app.listen(4000, () => {
  console.log(`🚀  Server ready at http:  //localhost:4000/`);
});
