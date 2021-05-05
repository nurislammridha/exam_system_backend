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

//application routes
app.use("/exam", examHandler);
//default error handler
function errorHandler(err, req, res, next) {
  if (res.headersSend) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
