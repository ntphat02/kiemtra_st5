const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public")); // Để phục vụ file HTML sau này

// Kết nối MongoDB
mongoose
  .connect("mongodb://localhost:27017/ProductDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Định nghĩa Model Sản phẩm
const ProductSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: Number,
  image: String,
});
const Product = mongoose.model("Product", ProductSchema);

const PORT = 5000;

app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// API Thêm mới
app.post("/api/products", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.json(newProduct);
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
