const express = require("express")
const app = express();
const { router } = require("./routes/blog-route")
const bodyParser = require("body-parser");
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", router)


app.listen(`${PORT}`, function () {
  console.log("server runing on port 5000");
});
