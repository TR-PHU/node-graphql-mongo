const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
    },
    authorId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "authors",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("books", BookSchema);
