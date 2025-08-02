import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const FacultySection = () => {
  const facultyFeatures = [
    {
      icon: "fas fa-tasks",
      title: "Complaint Management",
      description: "View and manage complaints assigned based on your expertise.",
    },
    {
      icon: "fas fa-comments",
      title: "Student Communication",
      description: "Communicate directly with students for updates and clarifications.",
    },
    {
      icon: "fas fa-check-circle",
      title: "Status Updates",
      description: "Update complaint status and maintain resolution records.",
    },
    {
      icon: "fas fa-chart-bar",
      title: "Performance Tracking",
      description: "Monitor resolution statistics and accountability metrics.",
    },
  ]

  const registrationSteps = [
    {
      step: "1",
      title: "Register",
      description: "Create account with institutional credentials",
      icon: "fas fa-user-plus",
    },
    {
      step: "2",
      title: "Verification",
      description: "Admin verifies credentials and department",
      icon: "fas fa-shield-check",
    },
    {
      step: "3",
      title: "Approval",
      description: "Receive approval and dashboard access",
      icon: "fas fa-check-circle",
    },
    {
      step: "4",
      title: "Start Managing",
      description: "Begin receiving and resolving complaints",
      icon: "fas fa-play-circle",
    },
  ]

  return (
    <section id="faculty" className="faculty-section py-3 bg-white">
      <Container>
        <Row className="text-center mb-3">
          <Col>
            <div className="mb-2">
              <div
                className="bg-primary-custom rounded-circle p-2 mx-auto mb-1"
                style={{ width: "40px", height: "40px" }}
              >
                <i className="fas fa-chalkboard-teacher text-white small"></i>
              </div>
            </div>
            <h2 className="fw-bold mb-1" style={{ fontSize: '1.5rem' }}>For Faculty</h2>
            <p className="text-muted small mb-0">Efficient complaint resolution system designed for faculty members</p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col lg={6} className="mb-3">
            <Card className="card-custom h-100 border-0 shadow-sm">
              <Card.Body className="p-3">
                <div className="d-flex align-items-center mb-2">
                  <div className="bg-warning rounded-circle p-2 me-2" style={{ width: "32px", height: "32px" }}>
                    <i className="fas fa-user-check text-white small"></i>
                  </div>
                  <h6 className="fw-bold mb-0 text-warning">Registration Required</h6>
                </div>
                <p className="text-muted mb-2 small">
                  Faculty members must register and await admin approval before accessing complaint management features.
                  This ensures security and proper authorization.
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <Link to="/register">
                    <Button className="primary-btn btn-sm">
                      <i className="fas fa-user-plus me-1"></i>
                      Faculty Registration
                    </Button>
                  </Link>
                  <small className="text-muted">Admin approval required</small>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6} className="mb-3">
            <Card className="card-custom h-100 border-0 shadow-sm">
              <Card.Body className="p-3">
                <div className="d-flex align-items-center mb-2">
                  <div className="bg-info rounded-circle p-2 me-2" style={{ width: "32px", height: "32px" }}>
                    <i className="fas fa-cogs text-white small"></i>
                  </div>
                  <h6 className="fw-bold mb-0 text-info">Smart Assignment</h6>
                </div>
                <p className="text-muted mb-2 small">
                  Complaints are automatically assigned to faculty members based on their department, expertise, and
                  current workload, ensuring efficient resolution.
                </p>
                <div className="bg-light p-2 rounded">
                  <small className="text-muted">
                    <i className="fas fa-lightbulb me-1 text-primary-custom"></i>
                    AI-powered categorization ensures relevant complaint assignment
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <h5 className="fw-bold text-center mb-3">Registration Process</h5>
          </Col>
        </Row>
        <Row className="mb-4">
          {registrationSteps.map((step, index) => (
            <Col key={index} md={6} lg={3} className="mb-3">
              <Card className="card-custom h-100 text-center border-0 shadow-sm">
                <Card.Body className="p-3">
                  <div className="mb-2">
                    <div
                      className="bg-primary-custom rounded-circle p-2 mx-auto mb-1"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <i className={`${step.icon} text-white small`}></i>
                    </div>
                    <div
                      className="bg-secondary rounded-circle text-white fw-bold mx-auto"
                      style={{ width: "24px", height: "24px", lineHeight: "24px", fontSize: "12px" }}
                    >
                      {step.step}
                    </div>
                  </div>
                  <h6 className="fw-bold mb-2 small">{step.title}</h6>
                  <p className="text-muted small" style={{ fontSize: "0.75rem" }}>
                    {step.description}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row>
          <Col>
            <h5 className="fw-bold text-center mb-3">Faculty Capabilities</h5>
          </Col>
        </Row>
        <Row>
          {facultyFeatures.map((feature, index) => (
            <Col key={index} md={6} lg={3} className="mb-3">
              <Card className="card-custom h-100 text-center border-0 shadow-sm">
                <Card.Body className="p-3">
                  <div className="mb-2">
                    <div className="bg-success rounded-circle p-2 mx-auto" style={{ width: "40px", height: "40px" }}>
                      <i className={`${feature.icon} text-white small`}></i>
                    </div>
                  </div>
                  <h6 className="fw-bold mb-2 small">{feature.title}</h6>
                  <p className="text-muted small" style={{ fontSize: "0.75rem" }}>
                    {feature.description}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-3">
          <Col className="text-center">
            <div className="bg-light p-3 rounded shadow-sm">
              <h6 className="fw-bold text-primary-custom mb-1 small">
                <i className="fas fa-users me-1"></i>
                Faculty Responsibility
              </h6>
              <p className="text-muted mb-0 small">
                Your timely response and effective resolution contribute to a positive academic environment and student
                satisfaction.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FacultySection
