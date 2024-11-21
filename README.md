# Day 4 of Alura's Immersion! 🚀

This project is part of Alura's Back-End Immersion, focusing on building a robust API using **Node.js**, **Express**, and **MongoDB**. Over the immersion, the project evolves to include more advanced functionalities and database integrations.

## 📋 Features

- Starts a server that listens on port 3000.
- **GET /posts**: Retrieves all posts from the database.
- **POST /posts**: Adds a new post to the database.
- **POST /upload**: Uploads an image and creates a new post with the uploaded file.
- **Day 2 Updates**:
  - Created a mock database for posts.
  - Prepared MongoDB Atlas for integration by generating a connection link.
  - Added routes to interact with the mock data.
- **Day 3 Updates**:
  - Configured the first cluster, database, and collection on **MongoDB Atlas**.
  - Introduced **environment variables** for managing sensitive data.
  - Connected the database to the API using a connection string.
  - Refactored the GET `/posts` route to fetch data from MongoDB.
  - Created a clear project structure:
    - **Models** for database interaction.
    - **Controllers** to handle logic and requests.
    - **Routes** to manage API endpoints.
    - **Config** for centralized configuration.
- **Day 4 Updates**:
  - Implemented image upload functionality using **Multer**.
  - Created the `POST /posts` route to add new posts to the database.
  - Created the `POST /upload` route to handle file uploads and post creation.
  - Learned and tested HTTP verbs using Postman.
  - Sent data to the MongoDB database via the API.

## 🚀 How to Run the Project

1. Make sure you have [Node.js](https://nodejs.org/) installed on your system.
2. Clone the repository:
   
   `git clone https://github.com/your-username/your-repository-name.git`

3.  Navigate to the project directory:

    `cd your-repository-name` 
    
4.  Install dependencies:
    
    `npm install` 

5.  Configure environment variables:
    - Create a .env file in the root of the project.
    - Add the following:

    `CONNECTION_STRING=your-mongodb-connection-string`
    
6.  Ensure the uploads/ directory exists:
    - If not, create it manually or let the server handle it automatically.

7.  Start the server:

    `npm run dev` 
    
8.  Access the endpoint in your browser or API client:

- List all posts:
    `GET http://localhost:3000/posts` 

- Add a new post:
    `POST http://localhost:3000/posts`
    `Body: JSON with post details.`

- Upload an image:
    `POST http://localhost:3000/upload`
    `Body: Form-data with key "image" and file as the value.`

## 🛠️ Technologies Used

-   [Node.js](https://nodejs.org/)
-   [Express.js](https://expressjs.com/)
-   [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) 
-   [Multer](https://www.npmjs.com/package/multer)
-   [Postman](https://www.postman.com)
