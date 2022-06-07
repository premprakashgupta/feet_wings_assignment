const mongoose = require("mongoose");
exports.mongoDb_connect = () => {
  try {
    mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(console.log("mongo connect"));
  } catch (error) {
    console.log(error);
  }
};
