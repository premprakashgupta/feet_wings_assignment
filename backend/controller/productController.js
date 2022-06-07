const product_model = require("../models/product_model");
const ApiFeatures = require("../ulits/apiFeatures");

exports.productCreate = async (req, res, next) => {
  try {
    const data = await product_model.create(req.body);
    res.status(200).json({ msg: "success" });
  } catch (error) {
    res.status(401).json({ msg: error });
  }
};
exports.getAllProduct = async (req, res, next) => {
  try {
    const data = await product_model.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(401).json({ msg: error });
  }
};
exports.filterProduct = async (req, res, next) => {
  try {
    const apiFeature = new ApiFeatures(product_model.find(), req.query)
      .popularity()
      .price()
      .newestFirst();

    const data = await apiFeature.query;
    res.status(200).json(data);
  } catch (error) {
    res.status(401).json({ msg: error });
  }
};
