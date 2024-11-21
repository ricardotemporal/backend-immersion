import connectToDatabase from "../config/dbConfig.js";

// Establishes a connection to the database
const connection = await connectToDatabase(process.env.CONNECTION_STRING);

/**
 * Fetches all posts from the "posts" collection in the database.
 * 
 * @returns {Promise<Array>} An array containing all posts from the database.
 */
export async function getAllPosts() {
    const db = connection.db("imersao-backend");
    const collection = db.collection("posts");
    return collection.find().toArray();
}

/**
 * Creates a new post in the "posts" collection.
 * 
 * @param {Object} newPost - The data for the new post.
 * @returns {Promise<Object>} The result of the insert operation, including the inserted ID.
 */
export async function createPost(newPost) {
    const db = connection.db("imersao-backend");
    const collection = db.collection("posts");
    return collection.insertOne(newPost);
}
