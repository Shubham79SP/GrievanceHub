"use client"

import { useState } from "react"
import { Container, Row, Col, Card, Button, Badge, Nav, Navbar } from "react-bootstrap"
import ProfileSection from "../components/student/ProfileSection"
import ComplaintSection from "../components/student/ComplaintSection"
import AccountSettings from "../components/student/AccountSettings"
import { Link } from "react-router-dom"

const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState("complaints")
  const [notifications] = useState(3) // Mock notification count

  // Mock student data
  const studentData = {
    name: "John Doe",
    prn: "PRN2024001",
    year: "2024",
    course: "Bachelor of Computer Applications",
    department: "Computer Science",
    email: "john.doe@college.edu",
    profilePic: null, // Will show default avatar
  }

  const handleLogout = () => {
    // Handle logout logic
    console.log("Logging out...")
    // Redirect to login page
    window.location.href = "/login"
  }

  return (
    <div className="student-dashboard">
      {/* Top Navigation */}
      <Navbar bg="white" className="shadow-sm border-bottom">
        <Container fluid>
          <Navbar.Brand className="text-primary-custom fw-bold">
            <Link to="/" className="text-decoration-none text-primary-custom">
              GrievanceHub
            </Link>
          </Navbar.Brand>
          <div className="d-flex align-items-center">
            {/* Notification icon removed */}
            <Button variant="outline-danger" size="sm" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt me-1"></i>
              Logout
            </Button>
          </div>
        </Container>
      </Navbar>

      {/* Welcome Header */}
      <div className="bg-light py-3">
        <Container fluid>
          <h4 className="mb-0 text-dark">Welcome, {studentData.name}! 👋</h4>
          <small className="text-muted">Manage your complaints and track their progress</small>
        </Container>
      </div>

      <Container fluid className="py-4">
        <Row>
          {/* Left Sidebar */}
          <Col lg={3} className="mb-4">
            <Card className="card-custom">
              <Card.Body className="p-0">
                {/* Profile Section */}
                <div className="p-3 border-bottom">
                  <div className="text-center mb-3">
                    <div
                      className="bg-primary-custom rounded-circle mx-auto mb-2 d-flex align-items-center justify-content-center"
                      style={{ width: "80px", height: "80px" }}
                    >
                      <i className="fas fa-user text-white fs-3"></i>
                    </div>
                    <h6 className="fw-bold mb-1">{studentData.name}</h6>
                    <small className="text-muted">{studentData.prn}</small>
                  </div>
                  <div className="small">
                    <div className="mb-1">
                      <strong>Year:</strong> {studentData.year}
                    </div>
                    <div className="mb-1">
                      <strong>Course:</strong> {studentData.course}
                    </div>
                    <div className="mb-1">
                      <strong>Department:</strong> {studentData.department}
                    </div>
                  </div>
                </div>

                {/* Navigation Menu */}
                <Nav className="flex-column">
                  <Nav.Link
                    className={`px-3 py-2 ${activeSection === "complaints" ? "bg-primary-custom text-white" : ""}`}
                    onClick={() => setActiveSection("complaints")}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fas fa-clipboard-list me-2"></i>
                    My Complaints
                  </Nav.Link>
                  <Nav.Link
                    className={`px-3 py-2 ${activeSection === "profile" ? "bg-primary-custom text-white" : ""}`}
                    onClick={() => setActiveSection("profile")}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fas fa-user-edit me-2"></i>
                    Edit Profile
                  </Nav.Link>
                  <Nav.Link
                    className={`px-3 py-2 ${activeSection === "settings" ? "bg-primary-custom text-white" : ""}`}
                    onClick={() => setActiveSection("settings")}
                    style={{ cursor: "pointer" }}
                  >
                    <i className="fas fa-cog me-2"></i>
                    Account Settings
                  </Nav.Link>
                </Nav>

              
              </Card.Body>
            </Card>
          </Col>

          {/* Main Content */}
          <Col lg={9}>
            {activeSection === "complaints" && <ComplaintSection studentData={studentData} />}
            {activeSection === "profile" && <ProfileSection studentData={studentData} />}
            {activeSection === "settings" && <AccountSettings />}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default StudentDashboard
