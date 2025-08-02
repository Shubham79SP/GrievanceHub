import { Routes, Route } from "react-router-dom"
import LandingPage from "../components/LandingPage.jsx"
import LoginPage from "../components/LoginPage"
import RegisterPage from "../components/RegisterPage"
import StudentDashboard from "../components/StudentDashboard"
import FacultyDashboard from "../components/FacultyDashboard"
import AdminDashboard from "../components/AdminDashboard"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  )
}

export default AppRoutes
