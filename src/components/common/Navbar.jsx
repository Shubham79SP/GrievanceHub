"use client"

import { Link } from "react-router-dom"
import { Container, Navbar as BootstrapNavbar, Button, Badge } from "react-bootstrap"

const Navbar = ({
  brandText = "GrievanceHub",
  showNotifications = false,
  notificationCount = 0,
  onLogout,
  userType = "guest",
}) => {
  const getBrandColor = () => {
    switch (userType) {
      case "admin":
        return "text-dark"
      case "faculty":
        return "text-primary-custom"
      case "student":
        return "text-primary-custom"
      default:
        return "text-primary-custom"
    }
  }

  return (
    <BootstrapNavbar bg="white" className="shadow-sm border-bottom">
      <Container fluid>
        <BootstrapNavbar.Brand className={`fw-bold ${getBrandColor()}`}>
          <Link to="/" className={`text-decoration-none ${getBrandColor()}`}>
            {brandText}
          </Link>
        </BootstrapNavbar.Brand>

        {(showNotifications || onLogout) && (
          <div className="d-flex align-items-center">
            {showNotifications && (
              <div className="position-relative me-3">
                <Button
                  variant={userType === "admin" ? "outline-warning" : "outline-primary"}
                  size="sm"
                  className="position-relative"
                >
                  <i className="fas fa-bell"></i>
                  {notificationCount > 0 && (
                    <Badge
                      bg="danger"
                      pill
                      className="position-absolute top-0 start-100 translate-middle"
                      style={{ fontSize: "0.6rem" }}
                    >
                      {notificationCount}
                    </Badge>
                  )}
                </Button>
              </div>
            )}

            {onLogout && (
              <Button variant="outline-danger" size="sm" onClick={onLogout}>
                <i className="fas fa-sign-out-alt me-1"></i>
                Logout
              </Button>
            )}
          </div>
        )}
      </Container>
    </BootstrapNavbar>
  )
}

export default Navbar
