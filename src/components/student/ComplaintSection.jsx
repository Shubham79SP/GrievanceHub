"use client"

import { useState } from "react"
import { Card, Button, Table, Badge, Modal, Form, Row, Col } from "react-bootstrap"
import EditComplaintModal from "./EditComplaintModal"

const ComplaintSection = ({ studentData }) => {
  const [showNewComplaintModal, setShowNewComplaintModal] = useState(false)
  const [showViewModal, setShowViewModal] = useState(false)
  const [selectedComplaint, setSelectedComplaint] = useState(null)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editComplaintData, setEditComplaintData] = useState(null)
 const [newComplaint, setNewComplaint] = useState({
    title: "",
    category: "",
    subcategory: "",
    description: "",
    file: null,
  });


  // Mock complaints data
  const [complaints, setComplaints] = useState([
    {
      id: "GRV001",
      title: "Library Book Issue",
      category: "Academic",
      status: "Pending",
      facultyAssigned: "Dr. Smith",
      lastUpdated: "2024-01-15",
      description: "Unable to access required books for my course...",
    },
    {
      id: "GRV002",
      title: "Hostel Maintenance",
      category: "Administrative",
      status: "Under Review",
      facultyAssigned: "Mr. Johnson",
      lastUpdated: "2024-01-10",
      description: "Air conditioning not working in room 205...",
    },
    {
      id: "GRV003",
      title: "Fee Payment Issue",
      category: "Administrative",
      status: "Resolved",
      facultyAssigned: "Ms. Davis",
      lastUpdated: "2024-01-05",
      description: "Payment gateway error during fee submission...",
    },
  ])

  const categories = ["Academic", "Administrative", "Behavioral", "Infrastructure", "Other"]
  const subcategoryOptions = {
  Academic: ["Exam Issue", "Assignment Grading", "Syllabus Coverage"],
  Administrative: ["Hostel", "Fees", "Transport", "Scholarship"],
  Behavioral: ["Faculty Misconduct", "Student Misconduct", "Harassment"],
  Infrastructure: ["Wi-Fi", "Classroom Maintenance", "Lab Equipment"],
  Other: ["General", "Suggestion", "Technical Support"],
};

  const getStatusBadge = (status) => {
    const variants = {
      Pending: "warning",
      "Under Review": "info",
      Resolved: "success",
      Rejected: "danger",
    }
    return <Badge bg={variants[status] || "secondary"}>{status}</Badge>
  }

  const handleNewComplaintSubmit = (e) => {
    e.preventDefault()
    const complaint = {
      id: `GRV${String(complaints.length + 1).padStart(3, "0")}`,
      ...newComplaint,
      studentName: studentData.name,
      studentPRN: studentData.prn,
      department: studentData.department,
      status: "Pending",
      facultyAssigned: "To be assigned",
      lastUpdated: new Date().toISOString().split("T")[0],
    }
    setComplaints([complaint, ...complaints])
    setNewComplaint({ title: "", category: "", subcategory: "", description: "", file: null })
    setShowNewComplaintModal(false)
  }

  const handleViewComplaint = (complaint) => {
    setSelectedComplaint(complaint)
    setShowViewModal(true)
  }

  const handleDeleteComplaint = (complaintId) => {
    if (window.confirm("Are you sure you want to delete this complaint?")) {
      setComplaints(complaints.filter((c) => c.id !== complaintId))
    }
  }

  const handleEditComplaint = (complaint) => {
    setEditComplaintData(complaint)
    setShowEditModal(true)
  }

  const handleSaveEditedComplaint = (updatedComplaint) => {
    setComplaints(
      complaints.map((c) => (c.id === updatedComplaint.id ? { ...c, ...updatedComplaint } : c))
    )
  }

  return (
    <div>
      {/* Header with New Complaint Button */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="mb-0">My Complaints</h5>
        <Button className="primary-btn" onClick={() => setShowNewComplaintModal(true)}>
          <i className="fas fa-plus me-2"></i>
          Raise New Complaint
        </Button>
      </div>

      {/* Complaints Table */}
      <Card className="card-custom">
        <Card.Body>
          {complaints.length === 0 ? (
            <div className="text-center py-5">
              <i className="fas fa-clipboard-list text-muted fs-1 mb-3"></i>
              <h6 className="text-muted">No complaints found</h6>
              <p className="text-muted small">Click "Raise New Complaint" to get started</p>
            </div>
          ) : (
            <div className="table-responsive">
              <Table hover>
                <thead className="table-light">
                  <tr>
                    <th>Complaint ID</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Faculty Assigned</th>
                    <th>Last Updated</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {complaints.map((complaint) => (
                    <tr key={complaint.id}>
                      <td className="fw-bold text-primary-custom">{complaint.id}</td>
                      <td>{complaint.title}</td>
                      <td>{complaint.category}</td>
                      <td>{getStatusBadge(complaint.status)}</td>
                      <td>{complaint.facultyAssigned}</td>
                      <td>{complaint.lastUpdated}</td>
                      <td>
                        <div className="d-flex gap-1">
                          <Button variant="outline-primary" size="sm" onClick={() => handleViewComplaint(complaint)}>
                            <i className="fas fa-eye"></i>
                          </Button>
                          {(complaint.status === "Pending" || complaint.status === "Under Review") && (
                            <>
                          <Button variant="outline-warning" size="sm" onClick={() => handleEditComplaint(complaint)}>
                            <i className="fas fa-edit"></i>
                          </Button>
      {/* Edit Complaint Modal */}
      <EditComplaintModal
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        complaint={editComplaintData}
        onSave={handleSaveEditedComplaint}
        categories={categories}
        subcategoryOptions={subcategoryOptions}
      />
                              <Button
                                variant="outline-danger"
                                size="sm"
                                onClick={() => handleDeleteComplaint(complaint.id)}
                              >
                                <i className="fas fa-trash"></i>
                              </Button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </Card.Body>
      </Card>

      {/* New Complaint Modal */}
      <Modal show={showNewComplaintModal} onHide={() => setShowNewComplaintModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Raise New Complaint</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleNewComplaintSubmit}>
          <Modal.Body>
            {/* Prefilled Student Information */}
            <div className="bg-light p-3 rounded mb-4">
              <h6 className="text-primary-custom mb-3">Student Information</h6>
              <Row>
                <Col md={4}>
                  <Form.Group className="mb-2">
                    <Form.Label className="small fw-semibold">Student Name</Form.Label>
                    <Form.Control type="text" value={studentData.name} disabled className="bg-white" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-2">
                    <Form.Label className="small fw-semibold">PRN</Form.Label>
                    <Form.Control type="text" value={studentData.prn} disabled className="bg-white" />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-2">
                    <Form.Label className="small fw-semibold">Department</Form.Label>
                    <Form.Control type="text" value={studentData.department} disabled className="bg-white" />
                  </Form.Group>
                </Col>
              </Row>
            </div>

            {/* Complaint Details */}
            <h6 className="text-primary-custom mb-3">Complaint Details</h6>
            <Row>
      <Col md={4}>
        <Form.Group className="mb-3">
          <Form.Label>Complaint Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter complaint title"
            value={newComplaint.title}
            onChange={(e) => setNewComplaint({ ...newComplaint, title: e.target.value })}
            required
          />
        </Form.Group>
      </Col>
      <Col md={4}>
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Select
            value={newComplaint.category}
            onChange={(e) => setNewComplaint({ ...newComplaint, category: e.target.value, subcategory: "" })}
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Col>
      <Col md={4}>
        <Form.Group className="mb-3">
          <Form.Label>Subcategory</Form.Label>
          <Form.Select
            value={newComplaint.subcategory}
            onChange={(e) => setNewComplaint({ ...newComplaint, subcategory: e.target.value })}
            required
            disabled={!newComplaint.category}
          >
            <option value="">{newComplaint.category ? "Select Subcategory" : "Select Category First"}</option>
            {newComplaint.category && subcategoryOptions[newComplaint.category].map((subcat) => (
              <option key={subcat} value={subcat}>
                {subcat}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Describe your complaint in detail..."
                value={newComplaint.description}
                onChange={(e) => setNewComplaint({ ...newComplaint, description: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Attach File (Optional)</Form.Label>
              <Form.Control
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                onChange={(e) => setNewComplaint({ ...newComplaint, file: e.target.files[0] })}
              />
              <Form.Text className="text-muted">Supported formats: PDF, DOC, DOCX, JPG, PNG (Max 5MB)</Form.Text>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowNewComplaintModal(false)}>
              Cancel
            </Button>
            <Button type="submit" className="primary-btn">
              Submit Complaint
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {/* View Complaint Modal */}
      <Modal show={showViewModal} onHide={() => setShowViewModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Complaint Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedComplaint && (
            <div>
              {/* Student Information */}
              <div className="bg-light p-3 rounded mb-4">
                <h6 className="text-primary-custom mb-3">Student Information</h6>
                <Row className="mb-2">
                  <Col md={4}>
                    <strong>Student Name:</strong> {selectedComplaint.studentName || studentData.name}
                  </Col>
                  <Col md={4}>
                    <strong>PRN:</strong> {selectedComplaint.studentPRN || studentData.prn}
                  </Col>
                  <Col md={4}>
                    <strong>Department:</strong> {selectedComplaint.department || studentData.department}
                  </Col>
                </Row>
              </div>

              {/* Complaint Details */}
              <h6 className="text-primary-custom mb-3">Complaint Details</h6>
              <Row className="mb-3">
                <Col md={6}>
                  <strong>Complaint ID:</strong> {selectedComplaint.id}
                </Col>
                <Col md={6}>
                  <strong>Status:</strong> {getStatusBadge(selectedComplaint.status)}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <strong>Category:</strong> {selectedComplaint.category}
                </Col>
                <Col md={6}>
                  <strong>Faculty Assigned:</strong> {selectedComplaint.facultyAssigned}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <strong>Title:</strong> {selectedComplaint.title}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <strong>Description:</strong>
                  <p className="mt-2">{selectedComplaint.description}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <strong>Last Updated:</strong> {selectedComplaint.lastUpdated}
                </Col>
              </Row>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowViewModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ComplaintSection
