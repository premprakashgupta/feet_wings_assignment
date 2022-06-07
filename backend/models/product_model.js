const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,

      trim: true,
    },
    productImage: {
      type: String,
    },
    category: {
      type: String,
    },

    price: {
      type: Number,
    },
    actuallPrice: {
      type: Number,
    },
    discount: {
      type: Number,
    },
    rating: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductSchema", ProductSchema);
