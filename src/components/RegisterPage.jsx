"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap"

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    studentId: "",
    department: "",
    role: "student",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  })
  const [showAlert, setShowAlert] = useState(false)

  const departments = [
    "Computer Science",
    "Information Technology",
    "Electronics",
    "Mechanical",
    "Civil",
    "Electrical",
    "Chemical",
  ]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!")
      return
    }
    setShowAlert(true)
    console.log("Registration data:", formData)
  }

  return (
    <div className="register-page min-vh-100 d-flex align-items-center py-4">
      <Container fluid>
        <Row className="justify-content-center">
          <Col lg={11} xl={10}>
            <Card className="card-custom overflow-hidden">
              <Row className="g-0 min-vh-100">
                {/* Left Side - Illustration */}
                <Col md={5} className="d-none d-md-block">
                  <div className="illustration-container h-100 d-flex align-items-center justify-content-center">
                    <div className="text-center">
                      <div className="mb-4">
                        <div
                          className="bg-primary-custom rounded-3 p-4 mb-4 mx-auto d-flex align-items-center justify-content-center"
                          style={{ width: "100px", height: "100px" }}
                        >
                          <i className="fas fa-user-plus text-white" style={{ fontSize: "2.5rem" }}></i>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="d-flex justify-content-center gap-3">
                          <div className="bg-white rounded-circle p-3 shadow-sm">
                            <i className="fas fa-graduation-cap text-primary-custom fs-5"></i>
                          </div>
                          <div className="bg-white rounded-circle p-3 shadow-sm">
                            <i className="fas fa-chalkboard-teacher text-primary-custom fs-5"></i>
                          </div>
                          <div className="bg-white rounded-circle p-3 shadow-sm">
                            <i className="fas fa-user-tie text-primary-custom fs-5"></i>
                          </div>
                        </div>
                      </div>
                      <h4 className="text-primary-custom fw-bold mb-3">Join Our Community</h4>
                      <p className="text-muted px-3">Students, Faculty, and Administrators working together</p>
                    </div>
                  </div>
                </Col>

                {/* Right Side - Form */}
                <Col md={7} className="p-4">
                  <div className="register-form h-100 d-flex flex-column">
                    <div className="mb-3">
                      <Link to="/" className="text-decoration-none">
                        <h5 className="fw-bold text-primary-custom mb-3">← GrievanceHub</h5>
                      </Link>
                      <h2 className="fw-bold mb-2">Create Account</h2>
                      <p className="text-muted mb-3">
                        Join our platform to submit and track your grievances efficiently.
                      </p>
                    </div>

                    {showAlert && (
                      <Alert variant="success" dismissible onClose={() => setShowAlert(false)} className="mb-3">
                        Registration request submitted! Admin approval required to access the system.
                      </Alert>
                    )}

                    <Form onSubmit={handleSubmit} className="flex-grow-1">
                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold small">Full Name</Form.Label>
                            <Form.Control
                              type="text"
                              name="fullName"
                              placeholder="Enter your full name"
                              value={formData.fullName}
                              onChange={handleChange}
                              size="sm"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold small">Email Address</Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              placeholder="Enter your email"
                              value={formData.email}
                              onChange={handleChange}
                              size="sm"
                              required
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold small">Student/Employee ID</Form.Label>
                            <Form.Control
                              type="text"
                              name="studentId"
                              placeholder="Enter your ID"
                              value={formData.studentId}
                              onChange={handleChange}
                              size="sm"
                              required
                            />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold small">Department</Form.Label>
                            <Form.Select
                              name="department"
                              value={formData.department}
                              onChange={handleChange}
                              size="sm"
                              required
                            >
                              <option value="">Select Department</option>
                              {departments.map((dept) => (
                                <option key={dept} value={dept}>
                                  {dept}
                                </option>
                              ))}
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold small">Login As</Form.Label>
                            <Form.Select name="role" value={formData.role} onChange={handleChange} size="sm" required>
                              <option value="student">Student</option>
                              <option value="faculty">Faculty</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label className="fw-semibold small">Password</Form.Label>
                            <Form.Control
                              type="password"
                              name="password"
                              placeholder="Create a password"
                              value={formData.password}
                              onChange={handleChange}
                              size="sm"
                              required
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold small">Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="confirmPassword"
                          placeholder="Confirm your password"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          size="sm"
                          required
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Check
                          type="checkbox"
                          name="agreeTerms"
                          label="I agree to the Terms of Service and Privacy Policy"
                          checked={formData.agreeTerms}
                          onChange={handleChange}
                          className="small"
                          required
                        />
                      </Form.Group>

                      <Button type="submit" className="primary-btn w-100 mb-3">
                        Create Account
                      </Button>

                      <div className="text-center">
                        <span className="text-muted small">Already have an account? </span>
                        <Link to="/login" className="text-primary-custom text-decoration-none fw-semibold small">
                          Sign in here
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
  )
}

export default RegisterPage
