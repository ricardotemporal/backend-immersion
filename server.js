import express from "express";
import routes from "./src/routes/postsRoute.js";

const app = express();

// Serve static files from the "uploads" directory
app.use(express.static("uploads"));

/**
 * Initializes the application by configuring routes and starting the server.
 */
routes(app);

/**
 * Starts the server and listens on port 3000.
 * Displays a message in the console to confirm the server is running.
 */
app.listen(3000, () => {
    console.log("Server is listening on port 3000...");
});
