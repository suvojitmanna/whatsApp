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

✨ Core Highlights <br>
⚡ Real-time bi-directional messaging <br>
🟢 Live user presence tracking <br>
🔐 Secure authentication (JWT) <br>
💬 Modern WhatsApp-like UI <br>
📡 Event-driven architecture <br>
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
🔥 Features <br>
💬 Messaging <br>
Instant message delivery (Socket.IO)<br>
Typing indicators (optional future) <br>
Read receipts (extendable) <br>
🧑‍🤝‍🧑 User System <br>
JWT Authentication <br>
Online/offline presence <br>
User session handling <br>
🎨 UI/UX <br>
WhatsApp-inspired interface
Responsive design
Smooth chat experience
🖼 Demo Preview (Add Your GIF Here)
<p align="center"> <img width="1919" height="914" alt="image" src="https://github.com/user-attachments/assets/f51b131c-e1de-496a-9e30-e941f7987bcd" />
 </p>

👉 Replace this with your real app recording using:

ScreenToGif
OBS Studio
📊 GitHub Insights
<p align="center"> <img src="https://github-readme-stats.vercel.app/api?username=suvojitmanna&show_icons=true&theme=tokyonight&hide_border=true"/> <img src="https://github-readme-streak-stats.herokuapp.com/?user=suvojitmanna&theme=tokyonight&hide_border=true"/> </p>
📈 Contribution Activity
<p align="center"> <img src="https://github-readme-activity-graph.vercel.app/graph?username=suvojitmanna&theme=react-dark&hide_border=true&area=true"/> </p>
🏆 Achievements
<p align="center"> <img src="https://github-profile-trophy.vercel.app/?username=suvojitmanna&theme=onedark&no-frame=true&margin-w=10"/> </p>

🧱 Architecture Diagram

```mermaid
graph TD
    A[👤 User Browser] --> B[⚛️ React Frontend]
    B -->|REST API| C[🟢 Express.js Backend]
    C --> D[(🍃 MongoDB Database)]
    C --> E[⚡ Socket.IO Server]
    E -->|Real-time Events| B
🖥️ Frontend Architecture

flowchart LR
    UI[UI Components] --> Pages[React Pages]
    Pages --> Store[Redux / Context]
    Store --> API[Axios API Layer]
    Store --> Socket[Socket.IO Client]
    API --> Backend[Express API]
    Socket --> Realtime[Socket.IO Server]

🛠️ Backend Architecture

flowchart TD
    Client[Frontend Client] --> Routes[Express Routes]
    Routes --> Controllers[Controllers]
    Controllers --> Models[MongoDB Models]
    Models --> DB[(MongoDB)]

    Controllers --> Auth[JWT Middleware]
    Controllers --> Socket[Socket.IO Events]

    Socket --> OnlineUsers[Online Users Map]
    Socket --> Messages[Real-time Messaging]

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
🚀 Future Enhancements <br>
📞 Voice & Video Calling (WebRTC) <br>
📎 File/Image Sharing <br>
👥 Group Chats <br>
🔔 Push Notifications <br>
🌐 Multi-device sync <br>
🤝 Contributing <br>
git checkout -b feature-name
git commit -m "Add feature"
git push origin feature-name
⭐ Support

If you like this project:

⭐ Star the repo <br>
🍴 Fork it <br>
📢 Share it <br>

👨‍💻 Author

Suvojit Manna
GitHub: https://github.com/suvojitmanna

📜 License

MIT License

👁 Visitors
<p align="center"> <img src="https://komarev.com/ghpvc/?username=suvojitmanna&label=Profile%20Views&color=brightgreen&style=for-the-badge"/> </p>
🎯 Footer
<p align="center"> <img src="https://capsule-render.vercel.app/api?type=waving&color=0:075E54,100:25D366&height=140&section=footer"/> </p>
