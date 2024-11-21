import express from "express";
import multer from "multer";
import { listPosts, createNewPost, uploadImage } from "../controllers/postsController.js";

// Configuring Multer to handle file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Directory where files will be stored
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
     * - Uses Multer to handle file upload, storing files in the "uploads" directory.
     */
    app.post("/upload", upload.single("image"), uploadImage);
};

export default routes;
