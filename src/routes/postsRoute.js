import express from "express";
import multer from "multer";
import cors from "cors";
import { listPosts, createNewPost, uploadImage, updateNewPost, deleteNewPost } from "../controllers/postsController.js";

// Configuring CORS options
const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
};

// Configuring Multer to handle file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // Directory where files will be stored
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // File's original name
    }
});

const upload = multer({ storage });

/**
 * Configures the application routes.
 * 
 * @param {Object} app - The Express application instance.
 */
const routes = (app) => {
    // Middleware
    app.use(cors(corsOptions));
    app.use(express.json());

    /**
     * GET /posts
     * Route to list all posts.
     */
    app.get("/posts", listPosts);

    /**
     * POST /posts
     * Route to create a new post.
     */
    app.post("/posts", createNewPost);

    /**
     * POST /upload
     * Route to upload an image and create a new post with the uploaded file.
     * 
     * Middleware:
     * - Uses Multer to handle file uploads.
     */
    app.post("/upload", upload.single("image"), uploadImage);

    /**
     * PUT /upload/:id
     * Route to update an existing post with a new image and description.
     */
    app.put("/upload/:id", updateNewPost);

    /**
     * DELETE /posts/:id
     * Route to delete a specific post by its ID.
     */
    app.delete("/posts/:id", deleteNewPost);
};

export default routes;
