

import { useState } from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap"
import Header from "./LandingPage/NavbarLanding.jsx"

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "student",
    rememberMe: false,
  })
  const [showAlert, setShowAlert] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowAlert(true)
    console.log("Login data:", formData)
  }

  return (
    <>
      <Header />
      <div className="login-page min-vh-100 d-flex align-items-center">
        <Container fluid>
          <Row className="justify-content-center">
            <Col lg={10} xl={8}>
              <Card className="card-custom overflow-hidden">
                <Row className="g-0">
                  {/* Left Side - Illustration */}
                  <Col md={5} className="d-none d-md-block">
                    <div className="illustration-container h-100 d-flex align-items-center justify-content-center">
                      <div className="text-center">
                        <div className="mb-4">
                          <div className="position-relative">
                            <div
                              className="bg-primary-custom rounded-3 p-4 mb-4 mx-auto d-flex align-items-center justify-content-center"
                              style={{ width: "100px", height: "100px" }}
                            >
                              <i className="fas fa-lock text-white" style={{ fontSize: "2.5rem" }}></i>
                            </div>
                            <div className="position-absolute top-0 start-0">
                              <div className="bg-white rounded-circle p-2 shadow-sm">
                                <i className="fas fa-check text-success"></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="illustration-person mb-4">
                          <div
                            className="bg-white rounded-3 p-4 shadow-sm mx-auto d-flex align-items-center justify-content-center"
                            style={{ width: "180px", height: "130px" }}
                          >
                            <i className="fas fa-user-graduate text-primary-custom" style={{ fontSize: "3.5rem" }}></i>
                          </div>
                        </div>
                        <h4 className="text-primary-custom fw-bold mb-3">Secure Access</h4>
                        <p className="text-muted px-3">Your data is protected with enterprise-grade security</p>
                      </div>
                    </div>
                  </Col>

                  {/* Right Side - Form */}
                  <Col md={7} className="p-4">
                    <div className="login-form h-100 d-flex flex-column justify-content-center">
                      <div className="mb-4">
                        <Link to="/" className="text-decoration-none">
                          <h5 className="fw-bold text-primary-custom mb-3">← GrievanceHub</h5>
                        </Link>
                        <h2 className="fw-bold mb-2">Sign in</h2>
                        <p className="text-muted mb-3">
                          Sign in to your account and explore a world of possibilities. Your journey begins here.
                        </p>
                      </div>

                      {showAlert && (
                        <Alert variant="info" dismissible onClose={() => setShowAlert(false)} className="mb-3">
                          Login functionality will be implemented with backend integration.
                        </Alert>
                      )}

                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                          <Form.Label className="fw-semibold small">User name</Form.Label>
                          <div className="position-relative">
                            <Form.Control
                              type="text"
                              name="username"
                              placeholder="Enter user name"
                              value={formData.username}
                              onChange={handleChange}
                              required
                            />
                            <i className="fas fa-user position-absolute top-50 end-0 translate-middle-y me-3 text-muted"></i>
                          </div>
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label className="fw-semibold small">Password</Form.Label>
                          <div className="position-relative">
                            <Form.Control
                              type="password"
                              name="password"
                              placeholder="Enter password"
                              value={formData.password}
                              onChange={handleChange}
                              required
                            />
                            <i className="fas fa-eye position-absolute top-50 end-0 translate-middle-y me-3 text-muted"></i>
                          </div>
                        </Form.Group>

                        <Form.Group className="mb-3">
                          <Form.Label className="fw-semibold small">Role</Form.Label>
                          <Form.Select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            required
                          >
                            <option value="student">Student</option>
                            <option value="faculty">Faculty</option>
                            <option value="admin">Admin</option>
                          </Form.Select>
                        </Form.Group>

                        <div className="d-flex justify-content-between align-items-center mb-4">
                         
                          <Link to="/forgotPassword" className="text-primary-custom text-decoration-none small">
                            Forgot your password?
                          </Link>
                        </div>

                        <Button type="submit" className="primary-btn w-100 mb-3">
                          Sign in
                        </Button>

                        <div className="text-center">
                          <span className="text-muted small">Don't have an account? </span>
                          <Link to="/register" className="text-primary-custom text-decoration-none fw-semibold small">
                            Register here
                          </Link>
                        </div>
                      </Form>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default LoginPage
