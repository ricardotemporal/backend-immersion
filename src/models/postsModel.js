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
