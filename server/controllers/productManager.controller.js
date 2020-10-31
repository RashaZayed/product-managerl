const ProductManager = require("../models/productManager.model");

module.exports.createOne = (req, res) => {
  const { title, price, description } = req.body;
  ProductManager.create({
    title,
    price,
    description,
  })
    .then((productManager) => res.json({ productManager: productManager }))
    .catch((err) => res.json({ message: "Something went wrong", err }));
};
