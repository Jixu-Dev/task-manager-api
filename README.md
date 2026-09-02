<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=14,20,24&height=200&section=header&text=Task%20Manager%20API&fontSize=50&fontAlignY=35&fontColor=FFFFFF&desc=RESTful%20Task%20Management%20Backend&descAlignY=55&descSize=18&animation=twinkling" width="100%"/>

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-ODM-880000?style=for-the-badge&logo=mongoose&logoColor=white)](https://mongoosejs.com/)

</div>

---

## 📋 Overview

**Task Manager API** is a clean, RESTful backend service for managing tasks. Built with **Node.js**, **Express**, and **MongoDB Atlas**, it provides full CRUD operations with priority tagging, status filtering, and centralized error handling — designed to pair seamlessly with the [Task Manager UI](https://github.com/Jixu-Dev/task-manager-ui).

---

## ✨ Features

- 📝 **Full CRUD** — Create, Read, Update, Delete tasks
- 🏷️ **Priority Levels** — Low, Medium, High priority tagging
- 🔄 **Status Tracking** — Pending → In Progress → Completed
- 🔍 **Query Filtering** — Filter tasks by status via query parameters
- ⚠️ **Error Handling** — Centralized error middleware with clear JSON responses
- ☁️ **Cloud Database** — MongoDB Atlas for production-ready persistence

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|:---:|---|---|
| `GET` | `/api/tasks` | Get all tasks (optional `?status=` filter) |
| `GET` | `/api/tasks/:id` | Get a single task by ID |
| `POST` | `/api/tasks` | Create a new task |
| `PUT` | `/api/tasks/:id` | Update an existing task |
| `DELETE` | `/api/tasks/:id` | Delete a task |

### Request Body Schema

```json
{
  "title": "Build README redesign",
  "description": "Create stunning READMEs for all repos",
  "status": "in-progress",
  "priority": "high"
}
```

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
|:---:|:---:|
| **Runtime** | <img src="https://skillicons.dev/icons?i=nodejs&theme=dark" height="30"/> Node.js |
| **Framework** | <img src="https://skillicons.dev/icons?i=express&theme=dark" height="30"/> Express.js |
| **Database** | <img src="https://skillicons.dev/icons?i=mongodb&theme=dark" height="30"/> MongoDB Atlas |
| **ODM** | Mongoose |

</div>

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/Jixu-Dev/task-manager-api.git
cd task-manager-api

# Install dependencies
npm install

# Set up environment variables
# Create a .env file with your MongoDB connection string:
# MONGO_URI=mongodb+srv://your-connection-string

# Start the server
npm start
```

---

## 🔗 Related

| Repository | Description |
|---|---|
| [task-manager-ui](https://github.com/Jixu-Dev/task-manager-ui) | React frontend for this API |

---

<div align="center">

### 🤝 Contributing

Contributions, issues, and feature requests are welcome!

<br/>

**Built with 💚 by [Rohit Gowda](https://github.com/Jixu-Dev)**

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=14,20,24&height=100&section=footer&animation=twinkling" width="100%"/>

</div>
