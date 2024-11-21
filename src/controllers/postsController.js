import fs from "fs";
import { getAllPosts, createPost } from "../models/postsModel.js";

/**
 * Controller function to list all posts.
 * 
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @returns {void} Sends a JSON response with the list of posts.
 */
export async function listPosts(req, res) {
    try {
        const posts = await getAllPosts();
        res.status(200).json(posts);
    } catch (error) {
        console.error("Error fetching posts:", error.message);
        res.status(500).json({ error: "Failed to fetch posts" });
    }
}

/**
 * Controller function to create a new post.
 * 
 * @param {Object} req - The HTTP request object containing the post data.
 * @param {Object} res - The HTTP response object.
 * @returns {void} Sends a JSON response with the created post data.
 */
export async function createNewPost(req, res) {
    const newPost = req.body;
    try {
        const postCreated = await createPost(newPost);
        res.status(200).json(postCreated);
    } catch (error) {
        console.error("Error creating post:", error.message);
        res.status(500).json({ error: "Failed to create post" });
    }
}

/**
 * Controller function to handle image uploads and post creation.
 * 
 * @param {Object} req - The HTTP request object containing the file and post data.
 * @param {Object} res - The HTTP response object.
 * @returns {void} Sends a JSON response with the created post data.
 */
export async function uploadImage(req, res) {
    const newPost = {
        description: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const postCreated = await createPost(newPost);
        const updatedImage = `uploads/${postCreated.insertedId}.png`;

        // Rename the uploaded file to include the database ID
        fs.renameSync(req.file.path, updatedImage);

        res.status(200).json(postCreated);
    } catch (error) {
        console.error("Error uploading image:", error.message);
        res.status(500).json({ error: "Failed to upload image" });
    }
}
