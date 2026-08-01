# Task Manager API

A simple RESTful API for managing tasks, built with **Node.js**, **Express**, and **MongoDB (Mongoose)**.

## Features
- Full CRUD (Create, Read, Update, Delete) operations on tasks
- Task fields: title, description, status (pending / in-progress / completed), priority (low / medium / high)
- Filter tasks by status via query parameter
- Centralized error handling with clear JSON responses

## Tech Stack
- Node.js
- Express.js
- MongoDB Atlas (cloud database)
- Mongoose (ODM)

## Setup Instructions

1. Clone this repo and install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in the root (see `.env.example`) with your own MongoDB connection string:
   ```
   MONGO_URI=your_mongodb_connection_string_here
   PORT=5000
   ```

3. Run the server:
   ```
   npm start
   ```
   or, for auto-restart during development:
   ```
   npm run dev
   ```

4. The API will be running at `http://localhost:5000`

## API Endpoints

| Method | Endpoint          | Description              |
|--------|-------------------|---------------------------|
| GET    | /api/tasks        | Get all tasks (optional `?status=pending`) |
| GET    | /api/tasks/:id    | Get a single task by id  |
| POST   | /api/tasks        | Create a new task        |
| PUT    | /api/tasks/:id    | Update an existing task  |
| DELETE | /api/tasks/:id    | Delete a task             |

### Example: Create a task
```
POST /api/tasks
Content-Type: application/json

{
  "title": "Finish resume project",
  "description": "Build and deploy Task Manager API",
  "status": "in-progress",
  "priority": "high"
}
```

## Notes
- `.env` is excluded from version control via `.gitignore` — never commit real credentials.
- Timestamps (`createdAt`, `updatedAt`) are added automatically by Mongoose.
