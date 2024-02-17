import express from "express";
const router = express.Router();
import { userSignup, userLogin } from "../controller/user-controller.js";
import { getProduct } from "../controller/product-controller.js";
router.post("/signup", userSignup);
router.post("/login", userLogin);

// get api for product fetch from db
router.get("/products", getProduct);
export default router;
