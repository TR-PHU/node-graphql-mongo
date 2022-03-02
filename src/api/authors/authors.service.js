const Author = require("./models/Authors");

module.exports = {
  getAllAuthors: async () => await Author.find({}),
  createAuthor: async (args) => {
    const newAuthor = new Author(args);
    return await newAuthor.save();
  },
  getAuthorById: async (id) => await Author.findById(id),
};
