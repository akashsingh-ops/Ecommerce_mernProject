import mongoose from "mongoose";
// / we validate data by creating new scheema of mongoose and give data type

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  description: String,
  tagline: String,
});
// databses is mongoDB and also create databse (or collection) inside mongodb
const Product = mongoose.model("product", productSchema);
export default Product;
