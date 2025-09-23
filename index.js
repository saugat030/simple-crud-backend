const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

const app = express();

// middleware
app.use(express.json()); // json file add garna
app.use(express.urlencoded({ extended: false })); // form bata garna

// Routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("helllo from Node Api Server Satish");
});

mongoose
  .connect(
    "mongodb+srv://satish:Satish990@backenddb.of31kss.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("database connected sucessfully");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
