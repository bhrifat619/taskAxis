# 🎯 Taskly — Freelance Task Marketplace (Client)

**Taskly** is a responsive freelance task marketplace built with React (Vite). Users can post tasks, browse and search tasks, place bids, and manage their posted tasks. It includes secure authentication, protected routes, and a modern responsive UI.

**🌐 Live Site:** https://taskly-1d1dc.web.app/  
**📂 Client Repo:** https://github.com/mdrahimultahsin/taskly-client  
**Server Repo:** https://github.com/mdrahimultahsin/taskly-backend**

---

# 🧰 Short Overview

Taskly enables freelancers and clients to post and manage tasks in a marketplace-style flow. Key user flows include posting tasks (CRUD), bidding on tasks, viewing task details, and managing personal posted tasks and bookmarks. Authentication is handled via Firebase.

---

# 🚀 Technologies Used

- **Frontend:** React (Vite), React Router
- **Auth / Hosting:** Firebase Authentication, Firebase Hosting (live site)
- **Styling:** Tailwind CSS + DaisyUI
- **UI / Utilities:** React Icons, Lottie-react, React Awesome Reveal
- **Notifications / UI Feedback:** React Toastify, SweetAlert2

---

# 📋 Core Features

- 🔐 Login / Signup with Email & Google (Firebase)
- 📝 Add / Update / Delete / View own tasks (CRUD)
- 🛒 Browse all posted tasks with thumbnails & details
- 💼 Bid on tasks and track bid counts
- 🔍 Search tasks by name (real-time search)
- 🗂 Filter by category and view tasks per category
- 💼 My Posted Tasks — manage all tasks you created
- 🌗 Dark / Light theme toggle
- 📱 Fully responsive UI (mobile, tablet, desktop)
- 🔒 Protected routes for authenticated actions

---

# 📦 Major Dependencies

> (Client)

- `react`, `react-dom`
- `react-router-dom`
- `firebase`
- `vite`
- `tailwindcss`, `daisyui`
- `react-icons`, `lottie-react`, `react-awesome-reveal`
- `react-toastify`, `sweetalert2`
- `axios` (or fetch, depending on your code)

> (Server — typical for MERN: add/adjust according to your server)

- `express`
- `mongoose`
- `cors`
- `dotenv`
- `nodemon` (dev)
- `jsonwebtoken` (if using JWT auth)

---

# 🔒 Protected Routes (client)

- `/add-task`
- `/my-posted-tasks`
- `/update/:id`
- `/task/:id` (task details — edit only if owner)

---

# 🛠️ Run Locally — Client (Vite)

1. **Clone the client repo**
   ```bash
   git clone https://github.com/mdrahimultahsin/taskly-client.git
   cd taskly-client
   Install dependencies
   ```

Edit
npm install

# or

yarn
Create .env with Firebase config (example .env.local for Vite; prefix with VITE\_)

env:
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
Start dev server

npm run dev

# or

yarn dev
Open: http://localhost:5173