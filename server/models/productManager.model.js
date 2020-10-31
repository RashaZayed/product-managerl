const mongoose = require("mongoose");

const ProductManagerSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  }
});

const ProductManager = mongoose.model('ProductManager' , ProductManagerSchema);
module.exports = ProductManager ; 
