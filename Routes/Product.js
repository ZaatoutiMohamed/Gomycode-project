const express = require("express");
const {
  AddProduct,
  GetProduct,
  DeleteProduct,
  UpdateContact,
  GetOneProduct,
} = require("../Controllers/Product");

const productRouter = express.Router();

productRouter.post("/AddProduct", AddProduct);
productRouter.get("/GetProduct", GetProduct);
productRouter.delete("/DeleteProduct/:id", DeleteProduct);
productRouter.put("/UpdateContact/:id", UpdateContact);
productRouter.get("/GetOneProduct/:id", GetOneProduct);

module.exports = productRouter;
