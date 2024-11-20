import express from "express";
import { listPosts } from "../controllers/postsController.js";

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
};

export default routes;
