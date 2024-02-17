import { response } from "express";
import Product from "../model/product-schema.js";
export const getProduct = async () => {
  try {
    const products = await Product.find({});
    response.status(200).json(products);
  } catch (error) {
    response.status(500).json({ messsage: error.messsage });
  }
};
