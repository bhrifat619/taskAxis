# 🛠️ Taskly Server - Backend for Freelance Task Marketplace

This is the backend server for Taskly, built with Node.js, Express.js, and MongoDB. It handles API endpoints for tasks, bids, and user-specific data.

## 🌐 Live Server Endpoint

👉 [Server Live Endpoint](https://taskly-backend-iota.vercel.app/)

## 🚀 Technologies Used

- Node.js
- Express.js
- MongoDB (using MongoDB Atlas)
- CORS
- dotenv

## 📁 API Endpoints

### 🔹 Tasks
- `GET /tasks` – Get all tasks
- `GET /tasks/:id` – Get specific task
- `GET /tasks?email=...` – Get tasks posted by a specific user
- `POST /tasks` – Add a new task
- `PATCH /tasks/:id` – Update task info
- `DELETE /tasks/:id` – Delete a task
- `PATCH /tasks/:id/bidCount` – Increment bid count on a task

### 🔹 Bids
- `POST /bids` – Place a bid on a task
- `GET /bids/:taskId` – Get bids placed by a user



