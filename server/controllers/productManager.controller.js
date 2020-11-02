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

module.exports.getAll = (req,res)=> {
  ProductManager.find({})
  .then(product => res.json(product))
  .catch(err => res.json(err))
}
module.exports.getOne = (req,res)=> {
  ProductManager.findById({_id: req.params.id})
  .then(product => res.json(product))
  .catch(err => res.json(err))
}
module.exports.updateOne= (req, res) => {
  ProductManager.findOneAndUpdate({_id: req.params.id} , req.body, {new:true})
  .then(person => res.json(person))
  .catch(err => res.json(err))
}
module.exports.deleteOne = (req,res)=> {
  ProductManager.deleteOne({_id: req.params.id})
  .then(person => res.json(person))
  .catch(err=>res.json(err))
}
