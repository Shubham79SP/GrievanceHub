import { Link } from "react-router-dom"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import Footer from "../components/common/Footer"

const LandingPage = () => {
  const features = [
    {
      icon: "fas fa-users",
      title: "Role-Based Access",
      description: "Secure authentication for Students, Faculty, and Administrators with appropriate permissions",
    },
    {
      icon: "fas fa-robot",
      title: "AI Chatbot Support",
      description: "Get instant answers to common questions before raising a formal complaint",
    },
    {
      icon: "fas fa-chart-line",
      title: "Real-time Tracking",
      description: "Monitor complaint status and resolution progress with detailed history",
    },
  ]

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <Container>
          <div className="navbar-brand fw-bold text-primary-custom fs-3">GrievanceHub</div>
          <div className="navbar-nav ms-auto">
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
      <section className="hero-section py-5">
        <Container>
          <Row className="align-items-center min-vh-75">
            <Col lg={6}>
              <div className="hero-content">
                <h1 className="display-4 fw-bold mb-4">
                  Streamline Your College
                  <span className="text-primary-custom"> Grievance Process</span>
                </h1>
                <p className="lead text-muted mb-4">
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
                        className="bg-primary-custom rounded-circle p-4 mb-3"
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
      <section className="features-section py-5 bg-white">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <h2 className="fw-bold mb-3">Key Features</h2>
              <p className="text-muted">Everything you need for effective grievance management</p>
            </Col>
          </Row>
          <Row>
            {features.map((feature, index) => (
              <Col key={index} md={4} className="mb-4">
                <Card className="card-custom h-100 text-center p-4">
                  <div className="mb-3">
                    <div
                      className="bg-primary-custom rounded-circle p-3 mx-auto"
                      style={{ width: "60px", height: "60px" }}
                    >
                      <i className={`${feature.icon} text-white`}></i>
                    </div>
                  </div>
                  <Card.Body>
                    <h5 className="fw-bold mb-3">{feature.title}</h5>
                    <p className="text-muted">{feature.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <Footer />
    </div>
  )
}

export default LandingPage
