const Book = require("./models/Books");

module.exports = {
  getAllBooks: async () => await Book.find({}),
  createBook: async (args) => {
    const newBook = new Book(args);
    return await newBook.save();
  },
  getBookById: async (args) => await Book.findById(args.id),
  getAllBookOfAuthor: async (id) => await Book.find({ authorId: id }),
};
