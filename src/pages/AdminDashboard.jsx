"use client"

import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import Navbar from "../components/common/Navbar"
import Sidebar from "../components/common/Sidebar"
import WelcomeHeader from "../components/common/WelcomeHeader"
import UserManagementSection from "../components/admin/UserManagementSection"
import SystemOverviewSection from "../components/admin/SystemOverviewSection"
import CategoryManagementSection from "../components/admin/CategoryManagementSection"
import AdminProfileSection from "../components/admin/AdminProfileSection"
import AdminAccountSettings from "../components/admin/AdminAccountSettings"

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("overview")
  const [pendingApprovals] = useState(8)

  const adminData = {
    name: "Admin User",
    adminId: "ADM2024001",
    role: "System Administrator",
    department: "IT Department",
    email: "admin@college.edu",
    profilePic: null,
    joinDate: "2020-01-15",
  }

  const userInfo = {
    name: adminData.name,
    id: adminData.adminId,
    details: {
      Role: adminData.role,
      Department: adminData.department,
      Email: adminData.email,
    },
  }

  const menuItems = [
    {
      key: "overview",
      label: "System Overview",
      icon: "fas fa-chart-pie",
    },
    {
      key: "users",
      label: "User Management",
      icon: "fas fa-users",
     

      
    },
    {
      key: "categories",
      label: "Manage Categories",
      icon: "fas fa-tags",
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
    console.log("Admin logging out...")
    window.location.href = "/login"
  }

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return <SystemOverviewSection />
      case "users":
        return <UserManagementSection />
      case "categories":
        return <CategoryManagementSection />
      case "profile":
        return <AdminProfileSection adminData={adminData} />
      case "settings":
        return <AdminAccountSettings />
      default:
        return <SystemOverviewSection />
    }
  }

  return (
    <div className="admin-dashboard">
      <Navbar
        brandText="GrievanceHub - Admin Panel"
        onLogout={handleLogout}
        userType="admin"
      />

      <WelcomeHeader
        userName={adminData.name}
        userType="admin"
        subtitle="System Administrator - Manage users, oversee grievances, and maintain system integrity"
        bgColor="bg-dark"
      />

      <Container fluid className="py-4">
        <Row>
          <Col lg={3} className="mb-4">
            <Sidebar
              userInfo={userInfo}
              menuItems={menuItems}
              activeSection={activeSection}
              onSectionChange={setActiveSection}
              userType="admin"
              showChatBot={false}
            />
          </Col>
          <Col lg={9}>{renderContent()}</Col>
        </Row>
      </Container>
    </div>
  )
}

export default AdminDashboard
