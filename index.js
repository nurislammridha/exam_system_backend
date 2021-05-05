const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const examHandler = require("./src/examHandler/ExamHandler");
app.use(express.json());

mongoose
  .connect("mongodb://localhost/examSystem", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
