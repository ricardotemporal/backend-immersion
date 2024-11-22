import fs from "fs";
import generateDescriptionWithGemini from "../services/geminiService.js";
import { getAllPosts, createPost, updatePost, deletePost } from "../models/postsModel.js";

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

/**
 * Controller function to update a post with new data.
 * 
 * @param {Object} req - The HTTP request object containing the updated post data.
 * @param {Object} res - The HTTP response object.
 * @returns {void} Sends a JSON response with the updated post data.
 */
export async function updateNewPost(req, res) {
    const id = req.params.id;
    const imageUrl = `http://localhost:3000/${id}.png`;

    try {
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
        const description = await generateDescriptionWithGemini(imgBuffer);

        const post = {
            imgUrl: imageUrl,
            descricao: description,
            alt: req.body.alt
        };

        const postUpdated = await updatePost(id, post);
        res.status(200).json(postUpdated);
    } catch (error) {
        console.error("Error updating post:", error.message);
        res.status(500).json({ error: "Failed to update post" });
    }
}

/**
 * Controller function to delete a post.
 * 
 * @param {Object} req - The HTTP request object containing the ID of the post to delete.
 * @param {Object} res - The HTTP response object.
 * @returns {void} Sends a JSON response with the result of the deletion.
 */
export async function deleteNewPost(req, res) {
    const id = req.params.id;
    try {
        const result = await deletePost(id);
        res.status(200).json(result);
    } catch (error) {
        console.error("Error deleting post:", error.message);
        res.status(500).json({ error: "Failed to delete post" });
    }
}
