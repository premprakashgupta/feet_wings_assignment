const express = require("express");
const { mongoDb_connect } = require("./db/db_connect");
const productRouter = require("./router/productRouter");
const cors = require("cors");
const path = require("path");
const app = express();
// dotenv config

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}
// mongo connecton

mongoDb_connect();

// json config

app.use(express.json());
// cors congig
if (process.env.NODE_ENV !== "PRODUCTION") {
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true, //access-control-allow-credentials:true
      optionSuccessStatus: 200,
    })
  );
} else {
  app.use(cors());
}

//checking for express running

app.get("/", (req, res) => {
  res.send("server active");
});

// End point

app.use("/api/v2/p2/flipkart", productRouter);

// serving static file

// if (process.env.NODE_ENV === "PRODUCTION") {
//   app.use(express.static(path.join(__dirname, "../frontend/build")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
//   });
// }

//running server
const listener = app.listen(process.env.PORT || 4000, () => {
  console.log(`port is running on ${listener.address().port}`);
});
