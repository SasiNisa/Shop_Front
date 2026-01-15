# 🛒 Online Shop – Frontend (React)

A **production-ready e-commerce frontend application** built with **React**, designed to consume a **secure Django REST Framework backend**.  
This project demonstrates **real-world full-stack development skills**, including authentication, API integration, environment-based configuration, and cloud deployment.

The frontend communicates with a live backend using **JWT-based authentication**, allowing users to register, log in, browse products, and manage their cart securely.

🌐 **Live Demo:**  
👉 https://shop-cyan-two.vercel.app/

🔗 **Backend API:**  
👉 https://online-shop-back-algg.onrender.com

📦 **Backend Repository:**  
👉 https://github.com/SasiNisa/shop_backend

---

## ✨ Key Highlights

- Built with **modern React best practices**
- Fully integrated with a **RESTful backend**
- Uses **JWT tokens** for secure user authentication
- Environment-based configuration for local & production
- Deployed using **Vercel (frontend)** and **Render (backend)**

---

## 🚀 Features

- ✅ User Registration & Login
- 🔐 JWT Authentication (Protected Routes)
- 🛍️ Product Listing from API
- 🛒 Cart Management
- 🌍 Production-ready API integration
- ⚙️ Environment variable configuration

---

## 🛠️ Tech Stack

### Frontend
- React (Create React App)
- JavaScript (ES6+)
- Axios (API communication)
- React Hooks

### Backend (Referenced)
- Django REST Framework
- JWT Authentication
- PostgreSQL (Production)
- Render Deployment
---

## ⚙️ Environment Variables

Create a `.env` file in the project root:

```env
REACT_APP_API_URL=https://online-shop-back-algg.onrender.com


## 🚧 Future Enhancements & Roadmap

This project is actively evolving. Planned improvements include:

### 🌐 Custom Domain & Production Hardening
- Connect frontend and backend to a **custom domain**
- Enable **HTTPS-only cookies** and production security headers
- Move secrets fully to environment variables
- Switch `DEBUG` off and apply production logging

### 🛒 E-commerce Features
- Product search and category filters
- Wishlist functionality
- Order history and checkout flow
- Payment gateway integration (Stripe / PayPal – demo mode)

### 👤 User Experience
- Improved UI/UX and responsive design
- Loading states and better error handling
- User profile management
- Email verification and password reset

### ⚙️ Backend & Performance
- Pagination and caching for product APIs
- Admin dashboard for product and order management
- Background tasks (Celery / Redis)
- Improved API documentation (Swagger / OpenAPI)

### 📊 Monitoring & Scalability
- API rate limiting
- Logging and error monitoring
- Performance optimizations for high traffic
- Docker-based deployment (optional)



