import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import ProtectedRoute from "./routes/ProtectedRoute";
import ResumeMatcher from "./pages/ResumeMatcher";
import useAuthStore from "./store/authStore";

import Kanban from "./pages/Kanban";
import Analytics from "./pages/Analytics";
import AIAssistant from "./pages/AIAssistant";
import { useEffect } from "react";

function App() {
   const checkAuth = useAuthStore((state) => state.checkAuth);

   useEffect(() => {
     checkAuth(); 
   }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/jobs"
          element={
            <ProtectedRoute>
              <Jobs />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate to="/dashboard" />} />

        <Route path="/kanban" element={<Kanban />} />
        <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="/ai"
          element={
            <ProtectedRoute>
              <AIAssistant />
            </ProtectedRoute>
          }
        />
        <Route
          path="/resume-matcher"
          element={
            <ProtectedRoute>
              <ResumeMatcher />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
