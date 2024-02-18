import Product from "../model/product-schema.js";

export const getProduct = async (req, res) => {
  // Add 'req' and 'res' parameters
  try {
    const products = await Product.find({});
    res.status(200).json(products); // Use 'res' instead of 'response'
  } catch (error) {
    res.status(500).json({ message: error.message }); // Use 'res' instead of 'response'
  }
};
