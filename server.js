/**
 * Main module to start the application server.
 * This code configures and initializes a server using the Express framework.
 * 
 * Available Endpoints:
 * - GET /posts: Returns a list of posts.
 * - GET /posts/:id: Returns a specific post by its ID.
 */

// Import the Express module to create the server
import express from "express";

// Create an instance of the Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Mock database: List of posts
const posts = [
    {
        id: 1,
        descricao: "teste1",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "teste2",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "teste3",
        imagem: "https://placecats.com/millie/300/150"
    }
];

/**
 * Starts the server on port 3000.
 * Displays a message in the console to confirm the server is running.
 */
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

/**
 * GET /posts
 * 
 * Retrieves a list of all posts.
 * 
 * @route GET /posts
 * @returns {Array} List of posts in JSON format.
 */
app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

/**
 * Function to find a post by its ID.
 * 
 * @param {number} id - The ID of the post to be found.
 * @returns {number} The index of the post in the array, or -1 if not found.
 */
function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

/**
 * GET /posts/:id
 * 
 * Retrieves a specific post by its ID.
 * 
 * @route GET /posts/:id
 * @param {number} id - The ID of the post provided in the URL parameters.
 * @returns {Object} The post object in JSON format.
 */
app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id);
    res.status(200).json(posts[index]);
});
