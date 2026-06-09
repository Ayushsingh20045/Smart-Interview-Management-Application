# Smart Interview Management Application

A full-stack MERN application that helps job seekers manage applications, track interview progress, organize opportunities through a Kanban board, and generate AI-powered interview questions.

---

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Secure HTTP-Only Cookies
* Protected Routes
* Persistent Authentication on Refresh

### Job Management

* Create Job Applications
* Update Job Details
* Delete Applications
* Search Jobs
* Filter by Status
* Track Salary, Location, Notes, and Company Details

### Kanban Board

* Drag and Drop Job Applications
* Status Management:

  * Applied
  * Interview
  * Offer
  * Rejected
* Mobile Responsive Design
* Touch Support for Mobile Devices

### Dashboard Analytics

* Total Applications
* Interview Count
* Offer Count
* Rejection Count
* Visual Progress Tracking

### AI Interview Assistant

Generate role-specific interview questions using Google's Gemini AI.

Question Categories:

* Technical Questions
* HR Questions
* Behavioral Questions

Fallback questions are automatically generated if AI service is unavailable.

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

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Cookie Parser
* Gemini AI API

### Deployment

* Frontend: Vercel
* Backend: Render
* Database: MongoDB Atlas

---

## Project Structure

frontend/
├── src/
│ ├── components/
│ ├── pages/
│ ├── layouts/
│ ├── services/
│ ├── store/
│ └── utils/

backend/
├── controller/
├── middleware/
├── models/
├── routes/
├── services/
├── config/
└── utils/

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

## Installation

### Clone Repository

```bash
git clone <repository-url>

cd smart-interview-management-application
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

## API Routes

### Authentication

```http
POST /api/auth/register

POST /api/auth/login

POST /api/auth/logout

GET /api/auth/me
```

### Jobs

```http
GET /api/jobs

POST /api/jobs

PUT /api/jobs/:id

DELETE /api/jobs/:id
```

### Statistics

```http
GET /api/stats
```

### AI

```http
POST /api/ai/questions
```

## Security Features

* Password Hashing using bcryptjs
* JWT-Based Authentication
* HTTP-Only Cookies
* Protected Backend Routes
* CORS Configuration
* Input Validation

## Future Improvements

* Resume Upload
* Email Notifications
* Interview Scheduling
* Company Reviews
* Job Recommendation Engine
* Calendar Integration
* AI Resume Analyzer

## Author

Ayush Singh

Computer Science Engineering Student

MERN Stack Developer

LinkedIn:
https://www.linkedin.com/in/ayush-singh-b15b39263/

GitHub:
https://github.com/dashboard

## License

This project is licensed under the MIT License.
