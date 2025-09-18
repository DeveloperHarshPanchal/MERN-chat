💬 MERN Chat Application

Your site is live at https://developerharshpanchal.github.io/MERN-chat/ 

A real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) and Socket.io. Users can register, login, and chat with others in real-time.

✨ Features

🔐 User Authentication with JWT

💬 Real-time Messaging using Socket.io

🏠 Chat Rooms: create/join rooms

👥 Online Status indicator

🕒 Message History stored in MongoDB

✍️ Typing Indicators

📱 Responsive Design for desktop & mobile

🛠️ Tech Stack

Frontend: React.js, Redux, Axios, Socket.io-client

Backend: Node.js, Express.js, Socket.io

Database: MongoDB, Mongoose

Authentication: JWT

Styling: Tailwind CSS / Material-UI

🎨 Demo

Add your live demo link, screenshots, or GIFs of your app here.

💻 Installation
1️⃣ Clone the repo
git clone https://github.com/yourusername/mern-chat-app.git
cd mern-chat-app

2️⃣ Backend Setup
cd server
npm install


Create a .env file in server folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


Start backend server:

npm run dev

3️⃣ Frontend Setup
cd client
npm install


Create .env file in client folder:

REACT_APP_API_URL=http://localhost:5000/api


Start frontend:

npm start

🗂️ Folder Structure
mern-chat-app/
├── client/       # React frontend
├── server/       # Node.js backend
└── README.md

🔗 API Endpoints

Auth:

📝 POST /api/auth/register → Register

🔑 POST /api/auth/login → Login

Chat:

💬 GET /api/chat → Get all chat rooms

➕ POST /api/chat → Create a new chat room

🗨️ GET /api/chat/:id/messages → Get room messages

✉️ POST /api/chat/:id/messages → Send message

Users:

👥 GET /api/users → Get all users

🧑 GET /api/users/:id → Get user details

✍️ PUT /api/users/:id → Update profile

🤝 Contributing

🍴 Fork the repository

🌿 Create a branch: git checkout -b feature/your-feature

💾 Commit changes: git commit -m "Add some feature"

🚀 Push branch: git push origin feature/your-feature

🔃 Open a Pull Request

📫 Contact

Harsh Panchal

📧 Email: panchalharsh723@gmail.com

🔗 LinkedIn: linkedin.com/in/harsh-panchal-
