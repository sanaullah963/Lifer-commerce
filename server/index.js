const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const product = require("./router/product");
const user = require("./router/user");
require("dotenv").config();

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true}));
app.use(express.json());
app.use("/product", product);
app.use('/uaer',user)

// start server on post 8000
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("server is running in port :", PORT);
});
// root get route
app.get("/", (req, res) => {
  res.send("Alhamdulillah");
});
// connect mongoDb
async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connected sucessfully");
  } catch (error) {
    console.log("DB connection error");
  }
}
connect();
