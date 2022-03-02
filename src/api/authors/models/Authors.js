const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AuthorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("authors", AuthorSchema);
