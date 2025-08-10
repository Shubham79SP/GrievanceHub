import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/authContext";
import axios from "axios";
import Header from "../components/LandingPage/NavbarLanding.jsx";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "student",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = "Username is required.";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    }
    if (!formData.role) {
      newErrors.role = "Role is required.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsLoading(true);

    try {
      const response = await axios.post("http://localhost:8080/api/users/login", {
        username: formData.username,
        password: formData.password,
        role: formData.role,
      });

      const userData = response.data;
      login(userData, formData.rememberMe);

      // Redirect based on role
      switch (userData.role?.toUpperCase()) {
        case "ADMIN":
          navigate("/admin-dashboard");
          break;
        case "STUDENT":
          navigate("/student-dashboard");
          break;
        case "FACULTY":
          navigate("/faculty-dashboard");
          break;
        default:
          setErrors({ submit: "Unexpected role from server." });
      }
    } catch (error) {
      if (error.response?.status === 401) {
        setErrors({ submit: "Invalid username or password." });
      } else {
        setErrors({ submit: "Login failed. Please try again later." });
      }
    } finally {
      setIsLoading(false);
    }
  };

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
                            <div className="position-relative">
                              <Form.Control
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                              />
                              <span
                                className="position-absolute top-50 end-0 translate-middle-y me-3"
                                style={{ cursor: "pointer" }}
                                onClick={() => setShowPassword((prev) => !prev)}
                              >
                                <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} text-muted`}></i>
                              </span>
                            </div>
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
                         <Form.Group className="mb-3">
                    <Form.Check
                      type="checkbox"
                      label="Remember me"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                    />
                  </Form.Group>
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
