const Author = require("../api/authors/models/Authors");
const Book = require("../api/books/models/Books");
// const createError = require("https-error");

const resolvers = {
  //QUERY
  Query: {
    books: async (parent, args, { bookService }) =>
      await bookService.getAllBooks(),
    book: async (parent, args, { bookService }) =>
      await bookService.getBookById(args),
    authors: async (parent, args, { authorService }) =>
      await authorService.getAllAuthors(),
    author: async (parent, args, { authorService }) =>
      await authorService.getAuthorById(args.id),
  },
  Book: {
    author: async (parent, args, { authorService }) =>
      await authorService.getAuthorById(parent.authorId),
  },
  Author: {
    books: async (parent, args, { bookService }) =>
      await bookService.getAllBookOfAuthor(parent.id),
  },

  // MUTATION
  Mutation: {
    createAuthor: async (parent, args, { authorService }) =>
      await authorService.createAuthor(args),
    createBook: async (paren, args, { bookService }) =>
      await bookService.createBook(args),
  },
};

module.exports = resolvers;
