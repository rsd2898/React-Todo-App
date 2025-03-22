# React Todo App

## Overview
This is a full-stack Todo application built using React.js for the frontend and Express.js for the backend. MongoDB Atlas is used as the database.

## Steps Followed to Create the React Todo App

### 1. Create a GitHub Repository
- Created a new repository on GitHub.
- Cloned the repository to the local system using:
  ```sh
  git clone <repository-url>
  ```

### 2. Project Structure
- Created two separate folders for the frontend and backend:
  - `frontend_todo` (Frontend - React.js)
  - `backend_todo` (Backend - Express.js)

### 3. Setting Up the Frontend (React.js)
- Navigated to the `frontend_todo` folder and initialized a React project using:
  ```sh
  npx create-react-app my-app
  ```
- Installed all necessary dependencies.
- Started the frontend application using:
  ```sh
  npm start
  ```

### 4. Setting Up the Backend (Express.js)
- Navigated to the `backend_todo` folder and initialized the backend project using:
  ```sh
  npm init
  ```
- Installed the required dependencies:
  ```sh
  npm i express
  npm i mongoose
  npm i cors
  npm i body-parser
  npm i nodemon --dev
  ```
- Used `nodemon` for automatic server restarts on file changes.
- Started the backend server using:
  ```sh
  nodemon server.js
  ```
  *(Replace `server.js` with the actual backend entry file name if different.)*

### 5. Database Setup (MongoDB Atlas)
- Used MongoDB Atlas as the cloud database.
- Configured the application to use MongoDB Atlas Drivers for database connectivity instead of a local setup.

### 6. API Calls using Fetch Method
- Used the `fetch` method for making API requests between the frontend and backend.
- The fetch API is used for sending and retrieving data asynchronously from the server.

## Technologies Used
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **API Handling:** Fetch API
- **Additional Packages:** cors, mongoose, body-parser, nodemon

## Running the Project
1. **Start the backend server:**
   ```sh
   cd backend_todo
   nodemon server.js
   ```
2. **Start the frontend application:**
   ```sh
   cd frontend_todo
   npm start
   ```

## Conclusion
This project demonstrates how to build a full-stack Todo app using React.js and Express.js, with MongoDB Atlas as the database. The backend is structured with proper API calls using Fetch, and nodemon is used for efficient backend development.

---

**Note:** Ensure MongoDB Atlas is set up and configured correctly for the application to work seamlessly.

