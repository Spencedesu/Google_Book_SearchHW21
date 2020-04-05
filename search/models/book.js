const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookid: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  title: { type: String, required: true },
  authors: { type: String, required: true },
  description: { type: String }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;