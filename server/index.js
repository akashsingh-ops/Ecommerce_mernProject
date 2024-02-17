import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import Connection from "./database/db.js";
import Default from "./default.js";
import Router from "./routes/route.js";
// initialise express
dotenv.config();
const app = express();
const PORT = 8000;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

// urlencoded use for remove white space from url
// Middleware
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Routes
app.use("/", Router);

// Establish database connection
Connection(USERNAME, PASSWORD);
// Start the server
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
Default();

// create express`s server by using a funtion called -> listen and it take 2 argu  i.e port and callback funtion
