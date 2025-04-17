import express from "express";
import ora from "ora";
import processUserRouter from "./api/process-user";

// Create an Express instance
const app = express();

// Middleware to parse JSON data in the request body
app.use(express.json());

// Define the routes
app.get("/", (req, res) => {
	res.send("API is running...");
});

// Define the API routes
app.use("/api/process-user", processUserRouter);

// Define the port
const PORT = 3000;
const spinner = ora(`Starting server on port ${PORT}...`).start();
app.listen(PORT, () => {
	spinner.succeed(`[SUCCESS] Server started on port ${PORT}`);
});
