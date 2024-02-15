import express from "express";
import dotenv from "dotenv";
import { Connection } from "./database/db.js";
import Default from "./default.js";
// initialise th express
const app = express();
dotenv.config();
// create express`s server by using a funtion called -> listen and it take 2 argu  i.e port and callback funtion
const PORT = 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
Default();
