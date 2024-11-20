import { getAllPosts } from "../models/postsModel.js";

/**
 * Controller function to list all posts.
 * 
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 * @returns {void} Sends a JSON response with the list of posts.
 */
export async function listPosts(req, res) {
    const posts = await getAllPosts();
    res.status(200).json(posts);
}
