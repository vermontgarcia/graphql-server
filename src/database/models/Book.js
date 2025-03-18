const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: {
    type: String,
  },
  pages: {
    type: Number,
  },
  authorId: {
    type: String,
  },
});

module.exports = mongoose.model('Book', bookSchema);
