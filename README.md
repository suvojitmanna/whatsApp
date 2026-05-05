💬 WhatsApp Clone (MERN + Socket.IO)
<p align="center"> <img src="https://capsule-render.vercel.app/api?type=waving&color=0:25D366,100:075E54&height=220&section=header&text=WhatsApp%20Clone&fontSize=45&fontColor=ffffff&animation=fadeIn&desc=Real-time%20Chat%20Application&descAlignY=75" /> </p> <p align="center"> <img src="https://readme-typing-svg.herokuapp.com?color=00FFAA&size=26&center=true&vCenter=true&width=800&lines=Real-time+Messaging+with+Socket.IO;MERN+Stack+Project;Scalable+Chat+Architecture;WhatsApp+UI+Clone;Full-Stack+Realtime+System" /> </p>
🏆 Badges
<p align="center"> <img src="https://img.shields.io/badge/MERN-Stack-4CAF50?style=for-the-badge"/> <img src="https://img.shields.io/badge/Realtime-Socket.IO-black?style=for-the-badge"/> <img src="https://img.shields.io/badge/Deployed-Vercel-blue?style=for-the-badge"/> <img src="https://img.shields.io/badge/Status-Production-success?style=for-the-badge"/> </p>
🌍 Live Demo

🚀 Live App:
👉 https://whatsapp-gilt-alpha.vercel.app

💻 GitHub Repository:
👉 https://github.com/suvojitmanna/whatsApp_clone

🧠 Project Overview

A scalable real-time chat application inspired by WhatsApp, built with MERN + Socket.IO, enabling seamless communication with instant updates.

✨ Core Highlights
⚡ Real-time bi-directional messaging
🟢 Live user presence tracking
🔐 Secure authentication (JWT)
💬 Modern WhatsApp-like UI
📡 Event-driven architecture
🧱 MERN Stack
<p align="center"> <img src="https://skillicons.dev/icons?i=mongodb,express,react,nodejs" /> </p>
🧠 System Design (High-Level)
flowchart LR
    U[User] --> F[React Frontend]
    F -->|REST API| B[Express Backend]
    B --> DB[(MongoDB)]
    B --> S[Socket.IO Server]
    S -->|WebSocket| F
⚙️ Real-Time Message Flow (Deep Dive)
sequenceDiagram
    participant UserA
    participant FrontendA
    participant Server
    participant Socket
    participant FrontendB
    participant UserB

    UserA->>FrontendA: Send Message
    FrontendA->>Server: API Call (store message)
    Server->>DB: Save Message
    Server->>Socket: Emit Event
    Socket->>FrontendB: Receive Message
    FrontendB->>UserB: Display Message
🔥 Features
💬 Messaging
Instant message delivery (Socket.IO)
Typing indicators (optional future)
Read receipts (extendable)
🧑‍🤝‍🧑 User System
JWT Authentication
Online/offline presence
User session handling
🎨 UI/UX
WhatsApp-inspired interface
Responsive design
Smooth chat experience
🖼 Demo Preview (Add Your GIF Here)
<p align="center"> <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExplaceholder/giphy.gif" width="700"/> </p>

👉 Replace this with your real app recording using:

ScreenToGif
OBS Studio
📊 GitHub Insights
<p align="center"> <img src="https://github-readme-stats.vercel.app/api?username=suvojitmanna&show_icons=true&theme=tokyonight&hide_border=true"/> <img src="https://github-readme-streak-stats.herokuapp.com/?user=suvojitmanna&theme=tokyonight&hide_border=true"/> </p>
📈 Contribution Activity
<p align="center"> <img src="https://github-readme-activity-graph.vercel.app/graph?username=suvojitmanna&theme=react-dark&hide_border=true&area=true"/> </p>
🏆 Achievements
<p align="center"> <img src="https://github-profile-trophy.vercel.app/?username=suvojitmanna&theme=onedark&no-frame=true&margin-w=10"/> </p>
🧩 Project Structure
client/
 ├── components/
 ├── pages/
 ├── redux/
 └── socket/

server/
 ├── controllers/
 ├── routes/
 ├── models/
 ├── middleware/
 └── socket/
⚙️ Installation
git clone https://github.com/suvojitmanna/whatsApp_clone.git

# Install dependencies
cd client && npm install
cd ../server && npm install
▶️ Run Application
# backend
npm run dev

# frontend
npm start
🔐 Environment Variables
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
PORT=5000
🔗 API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register
POST	/api/auth/login	Login
GET	/api/messages	Fetch messages
POST	/api/messages	Send message
🚀 Future Enhancements
📞 Voice & Video Calling (WebRTC)
📎 File/Image Sharing
👥 Group Chats
🔔 Push Notifications
🌐 Multi-device sync
🤝 Contributing
git checkout -b feature-name
git commit -m "Add feature"
git push origin feature-name
⭐ Support

If you like this project:

⭐ Star the repo
🍴 Fork it
📢 Share it

👨‍💻 Author

Suvojit Manna
GitHub: https://github.com/suvojitmanna

📜 License

MIT License

👁 Visitors
<p align="center"> <img src="https://komarev.com/ghpvc/?username=suvojitmanna&label=Profile%20Views&color=brightgreen&style=for-the-badge"/> </p>
🎯 Footer
<p align="center"> <img src="https://capsule-render.vercel.app/api?type=waving&color=0:075E54,100:25D366&height=140&section=footer"/> </p>
