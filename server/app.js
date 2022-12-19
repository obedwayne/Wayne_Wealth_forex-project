const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.use("/", (req, res) => {
  res.status(200).json({
    status: "Sucess",
    message: "Hello",
  });
});

module.exports = app;
