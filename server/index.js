const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser')
const product = require("./router/product");
const user = require("./router/user");
require("dotenv").config();

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000", "https://lifer-bd.vercel.app"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser())
app.use("/product", product);
app.use("/user", user);

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
    console.log("DB connection error",error);
  }
}
connect();
