// ...existing code from LandingPage.js...
import { Link } from "react-router-dom"
import { Container, Row, Col, Card, Button } from "react-bootstrap"

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <Container>
          <div className="navbar-brand text-primary-custom">GrievanceHub</div>
          <div className="navbar-nav ms-auto d-flex flex-row align-items-center">
            <Link to="/login" className="nav-link me-3">
              Login
            </Link>
            <Link to="/register">
              <Button className="primary-btn">Get Started</Button>
            </Link>
          </div>
        </Container>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center min-vh-75">
            <Col lg={6}>
              <div className="hero-content">
                <h1 className="display-4">
                  Streamline Your College
                  <span className="text-primary-custom"> Grievance Process</span>
                </h1>
                <p className="lead text-muted">
                  A comprehensive digital platform for students, faculty, and administrators to efficiently manage and
                  resolve academic and administrative complaints with transparency and accountability.
                </p>
                <div className="hero-buttons">
                  <Link to="/register" className="me-3">
                    <Button className="primary-btn btn-lg">Register Now</Button>
                  </Link>
                  <Link to="/login">
                    <Button className="secondary-btn btn-lg">Sign In</Button>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="illustration-container">
                <div className="hero-illustration">
                  <div className="d-flex flex-column align-items-center">
                    <div className="mb-4">
                      <div
                        className="bg-primary-custom rounded-circle p-4 mb-3 d-flex align-items-center justify-content-center"
                        style={{ width: "80px", height: "80px" }}
                      >
                        <i className="fas fa-clipboard-list text-white fs-2"></i>
                      </div>
                    </div>
                    <h4 className="text-primary-custom mb-3">Digital Grievance Management</h4>
                    <p className="text-center text-muted">
                      Efficient complaint handling with automatic routing and resolution tracking
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="features-section bg-white">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="fw-bold mb-3">Key Features</h2>
              <p className="text-muted">Everything you need for effective grievance management</p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="card-custom h-100 text-center p-4">
                <div className="mb-3">
                  <div
                    className="bg-primary-custom rounded-circle p-3 mx-auto d-flex align-items-center justify-content-center"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fas fa-users text-white"></i>
                  </div>
                </div>
                <Card.Body>
                  <h5 className="fw-bold mb-3">Role-Based Access</h5>
                  <p className="text-muted">
                    Secure authentication for Students, Faculty, and Administrators with appropriate permissions
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="card-custom h-100 text-center p-4">
                <div className="mb-3">
                  <div
                    className="bg-primary-custom rounded-circle p-3 mx-auto d-flex align-items-center justify-content-center"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fas fa-robot text-white"></i>
                  </div>
                </div>
                <Card.Body>
                  <h5 className="fw-bold mb-3">AI Chatbot Support</h5>
                  <p className="text-muted">
                    Get instant answers to common questions before raising a formal complaint
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="card-custom h-100 text-center p-4">
                <div className="mb-3">
                  <div
                    className="bg-primary-custom rounded-circle p-3 mx-auto d-flex align-items-center justify-content-center"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fas fa-chart-line text-white"></i>
                  </div>
                </div>
                <Card.Body>
                  <h5 className="fw-bold mb-3">Real-time Tracking</h5>
                  <p className="text-muted">Monitor complaint status and resolution progress with detailed history</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <Container>
          <Row>
            <Col md={6}>
              <h5 className="fw-bold">GrievanceHub</h5>
              <p className="text-muted">Streamlining college grievance management</p>
            </Col>
            <Col md={6} className="text-md-end">
              <p className="text-muted">&copy; 2024 GrievanceHub. All rights reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default LandingPage
