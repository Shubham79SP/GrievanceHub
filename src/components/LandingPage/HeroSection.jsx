import { Link } from "react-router-dom"
import { Container, Row, Col, Button } from "react-bootstrap"

const HeroSection = () => {
  return (
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
  )
}

export default HeroSection
