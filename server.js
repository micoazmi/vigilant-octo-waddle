const express = require("express");
const authentication = require("./middlewares/authentication");
const app = express();
const port = 3000;
const cors = require("cors");
const dotenv = require("dotenv");
const router = require("./route");

dotenv.config();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`example app listen on ${port}`);
});
