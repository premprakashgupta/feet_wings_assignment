const {
  productCreate,
  getAllProduct,
  filterProduct,
} = require("../controller/productController");

const Router = require("express").Router();

Router.route("/productCreate").post(productCreate);
Router.route("/getAllProduct").get(getAllProduct);
Router.route("/filterProduct").get(filterProduct);

module.exports = Router;
