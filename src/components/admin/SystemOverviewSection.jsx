"use client"
import { Card, Row, Col, Table, Badge, Button } from "react-bootstrap"

const SystemOverviewSection = () => {
  // Mock system statistics
  const stats = {
    totalUsers: 1247,
    activeStudents: 1156,
    activeFaculty: 89,
    pendingApprovals: 8,
    totalGrievances: 342,
    pendingGrievances: 45,
    resolvedGrievances: 267,
    rejectedGrievances: 30,
    avgResolutionTime: "4.2 days",
    satisfactionRate: "87%",
  }

  // Mock recent activities
  const recentActivities = [
    {
      id: 1,
      type: "registration",
      message: "New faculty registration: Dr. John Smith (Computer Science)",
      time: "2 hours ago",
      status: "pending",
    },
    {
      id: 2,
      type: "grievance",
      message: "Grievance GRV045 marked as resolved by Dr. Sarah Johnson",
      time: "4 hours ago",
      status: "completed",
    },
    {
      id: 3,
      type: "registration",
      message: "Student registration approved: Jane Doe (PRN2024156)",
      time: "6 hours ago",
      status: "approved",
    },
    {
      id: 4,
      type: "system",
      message: "System backup completed successfully",
      time: "8 hours ago",
      status: "completed",
    },
    {
      id: 5,
      type: "grievance",
      message: "New grievance assigned to Dr. Mike Wilson",
      time: "1 day ago",
      status: "assigned",
    },
  ]

  // Mock department statistics
  const departmentStats = [
    { department: "Computer Science", total: 89, pending: 12, resolved: 67, rejected: 10 },
    { department: "Information Technology", total: 76, pending: 8, resolved: 58, rejected: 10 },
    { department: "Electronics", total: 54, pending: 6, resolved: 42, rejected: 6 },
    { department: "Mechanical", total: 67, pending: 9, resolved: 48, rejected: 10 },
    { department: "Civil", total: 56, pending: 10, resolved: 38, rejected: 8 },
  ]

  const getActivityIcon = (type) => {
    const icons = {
      registration: "fas fa-user-plus text-info",
      grievance: "fas fa-clipboard-list text-warning",
      system: "fas fa-server text-success",
    }
    return icons[type] || "fas fa-info-circle text-muted"
  }

  const getStatusBadge = (status) => {
    const variants = {
      pending: "warning",
      completed: "success",
      approved: "success",
      assigned: "info",
    }
    return <Badge bg={variants[status] || "secondary"}>{status}</Badge>
  }

  return (
    <div>
      <h5 className="mb-4">System Overview</h5>

      {/* Statistics Cards */}
      <Row className="mb-4">
        <Col md={3} className="mb-3">
          <Card className="card-custom h-100">
            <Card.Body className="text-center">
              <div className="mb-2">
                <i className="fas fa-users text-primary-custom fs-2"></i>
              </div>
              <h4 className="fw-bold text-primary-custom">{stats.totalUsers}</h4>
              <p className="text-muted mb-0">Total Users</p>
              <small className="text-success">
                <i className="fas fa-arrow-up me-1"></i>
                +12 this month
              </small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card className="card-custom h-100">
            <Card.Body className="text-center">
              <div className="mb-2">
                <i className="fas fa-clipboard-list text-warning fs-2"></i>
              </div>
              <h4 className="fw-bold text-warning">{stats.totalGrievances}</h4>
              <p className="text-muted mb-0">Total Grievances</p>
              <small className="text-info">
                <i className="fas fa-clock me-1"></i>
                {stats.pendingGrievances} pending
              </small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card className="card-custom h-100">
            <Card.Body className="text-center">
              <div className="mb-2">
                <i className="fas fa-check-circle text-success fs-2"></i>
              </div>
              <h4 className="fw-bold text-success">{stats.resolvedGrievances}</h4>
              <p className="text-muted mb-0">Resolved</p>
              <small className="text-success">
                <i className="fas fa-percentage me-1"></i>
                78% resolution rate
              </small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} className="mb-3">
          <Card className="card-custom h-100">
            <Card.Body className="text-center">
              <div className="mb-2">
                <i className="fas fa-user-clock text-danger fs-2"></i>
              </div>
              <h4 className="fw-bold text-danger">{stats.pendingApprovals}</h4>
              <p className="text-muted mb-0">Pending Approvals</p>
              <Button variant="outline-danger" size="sm" className="mt-1">
                Review Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        {/* Recent Activities */}
        <Col md={6} className="mb-4">
          <Card className="card-custom">
            <Card.Header className="bg-light">
              <h6 className="mb-0">
                <i className="fas fa-history me-2"></i>
                Recent Activities
              </h6>
            </Card.Header>
            <Card.Body>
              <div className="activity-list">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="d-flex align-items-start mb-3 pb-3 border-bottom">
                    <div className="me-3">
                      <i className={getActivityIcon(activity.type)}></i>
                    </div>
                    <div className="flex-grow-1">
                      <p className="mb-1 small">{activity.message}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted">{activity.time}</small>
                        {getStatusBadge(activity.status)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Department Statistics */}
        <Col md={6} className="mb-4">
          <Card className="card-custom">
            <Card.Header className="bg-light">
              <h6 className="mb-0">
                <i className="fas fa-building me-2"></i>
                Department-wise Grievances
              </h6>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive">
                <Table size="sm">
                  <thead>
                    <tr>
                      <th>Department</th>
                      <th>Total</th>
                      <th>Pending</th>
                      <th>Resolved</th>
                    </tr>
                  </thead>
                  <tbody>
                    {departmentStats.map((dept, index) => (
                      <tr key={index}>
                        <td className="small">{dept.department}</td>
                        <td>
                          <Badge bg="primary">{dept.total}</Badge>
                        </td>
                        <td>
                          <Badge bg="warning">{dept.pending}</Badge>
                        </td>
                        <td>
                          <Badge bg="success">{dept.resolved}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* System Performance Metrics */}
      <Row>
        <Col md={12}>
          <Card className="card-custom">
            <Card.Header className="bg-light">
              <h6 className="mb-0">
                <i className="fas fa-chart-line me-2"></i>
                System Performance Metrics
              </h6>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={3} className="text-center">
                  <div className="mb-2">
                    <i className="fas fa-clock text-info fs-3"></i>
                  </div>
                  <h5 className="text-info">{stats.avgResolutionTime}</h5>
                  <p className="text-muted small mb-0">Avg Resolution Time</p>
                </Col>
                <Col md={3} className="text-center">
                  <div className="mb-2">
                    <i className="fas fa-smile text-success fs-3"></i>
                  </div>
                  <h5 className="text-success">{stats.satisfactionRate}</h5>
                  <p className="text-muted small mb-0">Satisfaction Rate</p>
                </Col>
                <Col md={3} className="text-center">
                  <div className="mb-2">
                    <i className="fas fa-graduation-cap text-primary-custom fs-3"></i>
                  </div>
                  <h5 className="text-primary-custom">{stats.activeStudents}</h5>
                  <p className="text-muted small mb-0">Active Students</p>
                </Col>
                <Col md={3} className="text-center">
                  <div className="mb-2">
                    <i className="fas fa-chalkboard-teacher text-warning fs-3"></i>
                  </div>
                  <h5 className="text-warning">{stats.activeFaculty}</h5>
                  <p className="text-muted small mb-0">Active Faculty</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default SystemOverviewSection
