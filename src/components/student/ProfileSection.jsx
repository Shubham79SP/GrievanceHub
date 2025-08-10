"use client"

import { useState } from "react"
import { Card, Form, Button, Row, Col, Alert } from "react-bootstrap"

const ProfileSection = ({ studentData }) => {
  const [profileData, setProfileData] = useState({
    name: studentData.name,
    email: studentData.email,
    phone: "+91 9876543210",
    address: "123 College Street, City, State - 123456",
    profilePic: null,
  })
  const [showAlert, setShowAlert] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setProfileData((prev) => ({
        ...prev,
        profilePic: file,
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle profile update logic
    console.log("Profile updated:", profileData)
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)
  }

  return (
    <div>
      <h5 className="mb-4">Edit Profile</h5>

      {showAlert && (
        <Alert variant="success" dismissible onClose={() => setShowAlert(false)}>
          Profile updated successfully!
        </Alert>
      )}

      <Card className="card-custom">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            {/* Profile Picture Section */}
            <div className="text-center mb-4">
              <div
                className="bg-primary-custom rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                style={{ width: "120px", height: "120px" }}
              >
                <i className="fas fa-user text-white fs-1"></i>
              </div>
              <Form.Group>
                <Form.Label className="btn btn-outline-primary btn-sm">
                  <i className="fas fa-camera me-2"></i>
                  Change Photo
                  <Form.Control type="file" accept="image/*" onChange={handleFileChange} className="d-none" />
                </Form.Label>
              </Form.Group>
            </div>

            {/* Basic Information */}
            <h6 className="fw-bold mb-3 text-primary-custom">Basic Information</h6>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={profileData.name}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>PRN</Form.Label>
                  <Form.Control type="text" value={studentData.prn} disabled />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Year of Admission</Form.Label>
                  <Form.Control type="text" value={studentData.year} disabled />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Department</Form.Label>
                  <Form.Control type="text" value={studentData.department} disabled />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-4">
              <Form.Label>Course</Form.Label>
              <Form.Control type="text" value={studentData.course} disabled />
            </Form.Group>

            {/* Contact Information */}
            <h6 className="fw-bold mb-3 text-primary-custom">Contact Information</h6>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-4">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="address"
                value={profileData.address}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <div className="text-end">
              <Button type="submit" className="primary-btn">
                <i className="fas fa-save me-2"></i>
                Update Profile
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProfileSection
