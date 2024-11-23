# 📦 Alura's Back-End Immersion Project

Welcome to the **Back-End Immersion** project developed during Alura's Back-End Immersion. This project showcases a robust RESTful API built with **Node.js**, **Express**, and **MongoDB**. It includes file upload functionality, image processing, and advanced database interactions, culminating in a deployment to **Google Cloud**.

## 🌟 Project Overview

This API is designed to manage posts, supporting CRUD (Create, Read, Update, Delete) operations. The core functionalities revolve around handling post data, including image uploads, data storage, and retrieval, with a MongoDB Atlas database.

The API is fully hosted on Google Cloud, ensuring high availability and easy access. You can interact with the deployed version through the following link:

[**Access the API**](https://backend-immersion-428822791899.southamerica-east1.run.app/posts)

## 🚀 Features

-   **File Uploads**: Upload images associated with posts using the `/upload` route.
-   **CRUD Operations**: Manage posts using dedicated routes for creating, reading, updating, and deleting.
-   **MongoDB Integration**: Data is persistently stored and managed using a **MongoDB Atlas** database.
-   **Image Processing**: Use of advanced image handling with Google Generative AI (Gemini) to generate descriptions for uploaded images.
-   **Google Cloud Deployment**: The API is deployed on Google Cloud for scalability and reliability.

## 🛠️ Technologies Used

-   **Node.js** - Server-side JavaScript runtime
-   **Express.js** - Web framework for building APIs
-   **MongoDB Atlas** - Cloud-based database service
-   **Multer** - Middleware for handling file uploads
-   **Google Generative AI** (Gemini) - For generating image descriptions
-   **Google Cloud Run** - For deploying and managing containerized applications
-   **Postman** - For API testing and debugging

## 📋 API Endpoints

### **GET** `/posts`

Retrieves a list of all posts.

**Example Response:**


  {
    "_id": "638d6e498d00e1cabc345672",
    "title": "My First Post",
    "description": "This is an example description."
  }

### **POST** `/posts`

Creates a new post.

**Request Body:**

{
  "title": "Post Title",
  "description": "Detailed description of the post."
}

**Example Response:**

{
  "_id": "638d6e498d00e1cabc345672",
  "title": "Post Title",
  "description": "Detailed description of the post."
}

### **POST** `/upload`

Uploads an image and creates a new post.

**Form-Data**:

-   `image`: Select an image file to upload.

**Example Response:**

{
  "_id": "638d6e498d00e1cabc345672",
  "title": "Post with Image",
  "description": "Automatically generated description for the image."
}`

### **PUT** `/upload/:id`

Updates a post's details and associated image.

**Request Body:**

{
  "title": "Updated Title",
  "description": "Updated description."
}

### **DELETE** `/posts/:id`

Deletes a post by ID.

**Example Response:**

{
  "message": "Post deleted successfully."
}

## 🚀 How to Run Locally

### Prerequisites

-   [Node.js](https://nodejs.org/) installed
-   [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) account

### **Step-by-Step Setup**

1.  **Clone the Repository**
    
	  `git clone https://github.com/ricardotemporal/your-repo-name.git`
	  `cd your-repo-name` 
    
2.  **Install Dependencies**

	`npm install` 
    
4.  **Set Up Environment Variables**
    
    -   Create a `.env` file in the root of the project:
        
        `CONNECTION_STRING=your-mongodb-connection-string`
    `GEMINI_API_KEY=your-gemini-api-key` 
        
5.  **Run the Server Locally**
    
    `npm run dev` 
    
    The server will start on `http://localhost:3000`.
   
    

## 🌐 Accessing the API

-   **List Posts**: [GET `http://localhost:3000/posts`](http://localhost:3000/posts)
-   **Create Post**: [POST `http://localhost:3000/posts`](http://localhost:3000/posts)
-   **Upload Image**: [POST `http://localhost:3000/upload`](http://localhost:3000/upload)
-   **Update Post**: PUT `http://localhost:3000/upload/:id`
-   **Delete Post**: DELETE `http://localhost:3000/posts/:id`