const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Express server is running!" });
});

//// Posts Routes
const postRoutes = require("./routes/PostRoutes");
app.use("/api", postRoutes);

const dbUrl = process.env.MONGO_URL;
const port = process.env.PORT;

mongoose
  .connect(dbUrl)
  .then((data) => app.listen(port))
  //   .then((data) => console.log("conneted!"))
  .catch((err) => console.log(err));
