import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import StudentDashboard from "../pages/StudentDashboard.jsx";
import FacultyDashboard from "../pages/FacultyDashboard.jsx";
import AdminDashboard from "../pages/AdminDashboard.jsx";
import ForgotPassword from "../pages/ForgotPassword.jsx";

import AdminRoute from "../routes/AdminRoute";
import StudentRoute from "../routes/StudentRoute";
import FacultyRoute from "../routes/FacultyRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />

      <Route
        path="/student-dashboard"
        element={
          <StudentRoute>
            <StudentDashboard />
          </StudentRoute>
        }
      />
      <Route
        path="/faculty-dashboard"
        element={
          <FacultyRoute>
            <FacultyDashboard />
          </FacultyRoute>
        }
      />
      <Route
        path="/admin-dashboard"
        element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
