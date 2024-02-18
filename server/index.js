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

// Middleware
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/", Router);

// Establish database connection
Connection(USERNAME, PASSWORD);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
Default();
