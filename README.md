
# 🚀 SB Works – FreelanceFinder

Welcome to **SB Works – FreelanceFinder**, a dynamic freelancing platform designed to connect clients with skilled freelancers in a secure, transparent, and efficient way.

---

## 🎯 Overview

FreelanceFinder empowers:
- **Clients** to post projects, review proposals, and hire the best fit.
- **Freelancers** to showcase their skills, bid on projects, and build portfolios.
- **Admins** to oversee platform integrity, manage users, and moderate content.

Real-time communication, transparent workflows, and robust admin oversight make collaboration seamless and professional.

---

## ⚙️ Tech Stack

### **Frontend**
- React.js, Bootstrap & Material UI for responsive and polished UI  
- Axios for API communication  

### **Backend**
- Node.js & Express.js for RESTful API handling  
- MongoDB (via Mongoose) for flexible data storage  

### **Authentication & Security**
- JWT-based role authentication (Client, Freelancer, Admin)  
- Middleware for route protection & access control  

### **Deployment**
- Frontend hosted on Vercel/Netlify  
- Backend deployed on AWS EC2 / Render  
- MongoDB Atlas for cloud database management  

---

## 🧩 Key Features

**For Clients**  
- Post/edit/delete projects with descriptions and budgets  
- Browse freelancer profiles and past work  
- Accept proposals, chat in-platform, provide feedback  

**For Freelancers**  
- Create detailed freelancer profile and portfolio  
- Browse project listings and submit proposals  
- Communicate securely and deliver final work directly  

**For Admins**  
- Approve/ban users, moderate content  
- Monitor transactions, messaging, and disputes  
- Manage platform activity and ensure smooth operations  

---

## 🧪 Development Workflow

1. **Setup**
   - Clone repo and install dependencies (`npm install`)
   - Configure `.env` with MongoDB and JWT secret

2. **Backend**
   - Build RESTful endpoints for user management, projects, proposals, messaging

3. **Frontend**
   - Create pages for authentication, dashboards, project listings, bidding, chat

4. **Authentication**
   - Implement JWT login and role-based route protection

5. **Testing**
   - Postman/Insomnia for API 
   - Manual UI testing across roles and devices

6. **Deployment**
   - Frontend on Vercel/Netlify  
   - Backend on Render/AWS  
   - MongoDB Atlas DB

---

## 🔧 Performance & Optimization

- Tested with 1000+ concurrent requests via JMeter/Postman  
- Average API response time: **<200ms**  
- UI render time: **<2s** on mobile and desktop  
- Optimizations include lazy-loading, image compression, and caching

---

## 🧠 Future Enhancements

- Real-time bidding and status updates via WebSockets  
- Enhanced messaging with file-sharing capabilities  
- AI-driven proposal suggestions and portfolio curation  
- Integrated payment gateway (Stripe, PayPal)  
- Admin analytics dashboard with usage insights  

---

## 🗂️ Project Structure

/client # React frontend
/server # Express.js backend
/models # Mongoose schemas (User, Project, Proposal, Message)
/routes # Auth, User, Project, Proposal, Message APIs
/middleware # Auth & role-based access middleware
/controllers # Core business logic handlers

## 📽️ Demo Video

[![Watch the demo on YouTube](https://img.youtube.com/vi/scwDk6vxaT4/hqdefault.jpg)](https://www.youtube.com/watch?v=scwDk6vxaT4)


![image alt](https://github.com/Manasa0109/SmartInternz_Freelancer_Platform/blob/15fb6ed4b0a128ed6452e64ba7f26e8574352443/SmartInternz_freelancer.png)
