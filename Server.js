const express = require("express");
const ConnectDB = require("./Config/ConnectDB");
const userRouter = require("./Routes/User");
const productRouter = require("./Routes/Product");

const app = express();
require("dotenv").config();

ConnectDB();
app.use(express.json());
app.use("/api/userAuth", userRouter);
app.use("/api/product", productRouter);
// app.use("/api/cart", productRouter);

const path = require("path");

// ... other app.use middleware
app.use(express.static(path.join(__dirname, "client", "build")));

// Right before your app.listen(), add this:
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(
  process.env.PORT || 5000,
  console.log(`le serveur est connectÃ© sur le port ${process.env.port}`)
);
