"use client"

import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Navbar from "../components/common/Navbar"
import Sidebar from "../components/common/Sidebar"
import WelcomeHeader from "../components/common/WelcomeHeader"
import ProfileSection from "../components/student/ProfileSection"
import ComplaintSection from "../components/student/ComplaintSection"
import AccountSettings from "../components/student/AccountSettings"

const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState("complaints")
  const [notifications] = useState(3)

  const studentData = {
    name: "John Doe",
    prn: "PRN2024001",
    year: "2024",
    course: "Bachelor of Computer Applications",
    department: "Computer Science",
    email: "john.doe@college.edu",
    profilePic: null,
  }

  const userInfo = {
    name: studentData.name,
    id: studentData.prn,
    details: {
      Year: studentData.year,
      Course: studentData.course,
      Department: studentData.department,
    },
  }

  const menuItems = [
    {
      key: "complaints",
      label: "My Complaints",
      icon: "fas fa-clipboard-list",
    },
    {
      key: "profile",
      label: "Edit Profile",
      icon: "fas fa-user-edit",
    },
    {
      key: "settings",
      label: "Account Settings",
      icon: "fas fa-cog",
    },
  ]

  const handleLogout = () => {
    console.log("Logging out...")
    window.location.href = "/login"
  }

  const renderContent = () => {
    switch (activeSection) {
      case "complaints":
        return <ComplaintSection studentData={studentData} />
      case "profile":
        return <ProfileSection studentData={studentData} />
      case "settings":
        return <AccountSettings />
      default:
        return <ComplaintSection studentData={studentData} />
    }
  }

  return (
    <div className="student-dashboard">
      <Navbar showNotifications={true} notificationCount={notifications} onLogout={handleLogout} userType="student" />

      <WelcomeHeader
        userName={studentData.name}
        userType="student"
        subtitle="Manage your complaints and track their progress"
      />

      <Container fluid className="py-4">
        <Row>
          <Col lg={3} className="mb-4">
            <Sidebar
              userInfo={userInfo}
              menuItems={menuItems}
              activeSection={activeSection}
              onSectionChange={setActiveSection}
              userType="student"
            />
          </Col>
          <Col lg={9}>{renderContent()}</Col>
        </Row>
      </Container>
    </div>
  )
}

export default StudentDashboard
