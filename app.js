const express = require("express");

require("dotenv").config();
require("./src/models");
const bookService = require("./src/api/books/books.service");
const authorService = require("./src/api/authors/authors.service");
(async () => {
  const { ApolloServer } = require("apollo-server-express");

  // Load schema & resolvers
  const typeDefs = require("./src/schema/schema");
  const resolvers = require("./src/resolver/resolver");

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ authorService, bookService }),
  });

  await server.start();
  const app = express();

  server.applyMiddleware({ app });

  await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
})();
