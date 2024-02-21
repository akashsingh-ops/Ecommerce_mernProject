import express from "express";
const router = express.Router();
import { userSignup, userLogin } from "../controller/user-controller.js";
import {
  getProduct,
  getProductById,
} from "../controller/product-controller.js";
router.post("/signup", userSignup);
router.post("/login", userLogin);

// get api for product fetch from db
router.get("/products", getProduct);
router.get("/product/:id", getProductById);

export default router;
