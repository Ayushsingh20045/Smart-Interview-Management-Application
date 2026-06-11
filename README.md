# Smart Interview Management Application

A full-stack AI-powered career management platform built with the MERN Stack that helps job seekers manage applications, track interview progress, prepare for interviews, analyze resumes, and discover matching job opportunities.

---

## Live Demo

Frontend:
https://smart-interview-management-applicat.vercel.app/

GitHub Repository:
https://github.com/Ayushsingh20045/Smart-Interview-Management-Application

---

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Secure HTTP-Only Cookies
* Protected Routes
* Persistent Authentication on Refresh
* Secure Logout Functionality

---

### Job Management

* Create Job Applications
* Update Job Details
* Delete Applications
* Search Jobs
* Filter Jobs by Status
* Track Company, Role, Salary, Location, and Notes
* Real-Time State Updates with Zustand

---

### Kanban Board

* Drag and Drop Job Applications
* Mobile & Desktop Responsive
* Touch Support for Mobile Devices
* Visual Job Pipeline Management

Application Stages:

* Applied
* Interview
* Offer
* Rejected

---

### Dashboard Analytics

Interactive analytics powered by Recharts.

Includes:

* Total Applications
* Interview Count
* Offer Count
* Rejection Count
* Response Rate Tracking
* Visual Charts and Statistics
* Application Progress Overview

---

### AI Interview Assistant

Generate interview questions using Google Gemini AI.

Question Categories:

* Technical Questions
* HR Questions
* Behavioral Questions

Features:

* Role-Specific Questions
* Company-Based Question Generation
* Experience-Level Customization
* Automatic Fallback Questions

---

### AI Resume Matcher

Upload a resume and discover matching job opportunities using AI.

Features:

* Resume Upload (PDF)
* Resume Text Extraction
* AI Skill Extraction using Gemini AI
* AI Role Detection
* Real-Time Job Search using Remotive API
* Skill-Based Job Matching
* Match Percentage Calculation
* Direct Apply Links
* Responsive User Interface

Workflow:

Resume Upload
→ PDF Parsing
→ Skill Extraction
→ Role Detection
→ Job Search
→ Match Calculation
→ Recommended Jobs

---

## Tech Stack

### Frontend

* React.js
* Zustand
* React Router DOM
* Tailwind CSS
* Axios
* DnD Kit
* Lucide React
* Recharts
* React Hot Toast

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Cookie Parser
* Multer
* PDF Parse
* Google Gemini AI API
* Remotive API

### Database

* MongoDB Atlas

### Deployment

* Frontend: Vercel
* Backend: Render

---

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── services/
│   ├── store/
│   ├── hooks/
│   └── utils/

backend/
├── config/
├── controller/
├── middleware/
├── models/
├── routes/
├── services/
├── uploads/
└── utils/
```

---

## Environment Variables

### Backend (.env)

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

CLIENT_URL=http://localhost:5173
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Ayushsingh20045/Smart-Interview-Management-Application.git

cd Smart-Interview-Management-Application
```

### Backend Setup

```bash
cd backend

npm install

npm run dev
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

---

## API Routes

### Authentication

```http
POST /api/auth/register

POST /api/auth/login

POST /api/auth/logout

GET /api/auth/me
```

---

### Jobs

```http
GET /api/jobs

POST /api/jobs

PUT /api/jobs/:id

DELETE /api/jobs/:id
```

---

### Statistics

```http
GET /api/stats
```

---

### AI Assistant

```http
POST /api/ai/questions
```

---

### Resume Matcher

```http
POST /api/resume/upload
```

---

## Security Features

* Password Hashing using bcryptjs
* JWT-Based Authentication
* Secure HTTP-Only Cookies
* Protected Backend Routes
* CORS Configuration
* Authentication Middleware
* Input Validation

---

## Learning Outcomes

Through this project I gained practical experience with:

* Full Stack MERN Development
* Authentication & Authorization
* State Management with Zustand
* Drag-and-Drop Interfaces
* REST API Design
* MongoDB Data Modeling
* AI Integration using Gemini API
* File Upload Handling
* PDF Processing
* Third-Party API Integration
* Analytics Dashboard Development
* Production Deployment with Vercel & Render

---

## Future Improvements

* Resume Score Analysis
* AI Skill Gap Detection
* Interview Scheduling
* Email Notifications
* Calendar Integration
* Real-Time Notifications
* Docker Support
* CI/CD Pipeline
* Multi-Resume Support
* Company Reviews & Ratings

---

## Author

Ayush Singh

Computer Science Engineering Student

MERN Stack Developer

LinkedIn:
https://www.linkedin.com/in/ayush-singh-b15b39263/

GitHub:
https://github.com/Ayushsingh20045

Portfolio:
https://my-portfolio-m698.vercel.app/

---

## License

This project is licensed under the MIT License.
