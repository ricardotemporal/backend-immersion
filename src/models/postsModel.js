import 'dotenv/config';
import { ObjectId } from "mongodb";
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

/**
 * Updates an existing post in the "posts" collection.
 * 
 * @param {string} id - The ID of the post to update.
 * @param {Object} updatedPost - The new data to update the post.
 * @returns {Promise<Object>} The result of the update operation.
 */
export async function updatePost(id, updatedPost) {
    const db = connection.db("imersao-backend");
    const collection = db.collection("posts");
    const objID = new ObjectId(id);
    return collection.updateOne({ _id: objID }, { $set: updatedPost });
}

/**
 * Deletes a post from the "posts" collection.
 * 
 * @param {string} id - The ID of the post to delete.
 * @returns {Promise<Object>} The result of the delete operation.
 */
export async function deletePost(id) {
    const db = connection.db("imersao-backend");
    const collection = db.collection("posts");
    const objID = new ObjectId(id);
    return collection.deleteOne({ _id: objID });
}
