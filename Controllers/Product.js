const Product = require("../Models/Product.js");

//  add new product
exports.AddProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(200).send({ newProduct, Msg: "Added" });
  } catch (error) {
    res.status(500).send("could NOT ADD product");
  }
};
//get product
exports.GetProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send({ products, Msg: "list of product" });
  } catch (errors) {
    res.status(500).send("could NOT GET product");
  }
};

exports.DeleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const DeleteP = await Product.findByIdAndDelete(id);
    res.status(200).send("Product Deleted");
  } catch (error) {
    res.status(500).send("could NOT DELETE product");
  }
};

exports.UpdateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const updateP = await Product.findByIdAndUpdate(id, { $set: req.body });
    res.status(200).send("product updated");
  } catch (error) {
    res.status(500).send("could NOT UPDATE product");
  }
};

exports.GetOneProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const GetOne = await Product.findById(id);
    res.status(200).send({ GetOne, Msg: "Product found" });
  } catch (error) {
    res.status(500).send("Product Not Found");
  }
};
