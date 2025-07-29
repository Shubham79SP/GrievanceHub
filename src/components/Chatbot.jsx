"use client"

import { useState } from "react"
import { Card, Button, Form } from "react-bootstrap"


// Chatbot component for handling FAQ and user queries
const Chatbot = () => {
  // State for chatbot open/close
  const [isOpen, setIsOpen] = useState(false)
  // State for chat messages (bot and user)
  const [messages, setMessages] = useState([
    { text: "Hello! I'm here to help with common grievance questions. How can I assist you?", isBot: true, timestamp: new Date().toLocaleTimeString() },
  ])
  // State for selected FAQ dropdown
  const [selectedFAQ, setSelectedFAQ] = useState("")
  // State for user input (for custom questions)
  const [userInput, setUserInput] = useState("")

  // List of FAQs (could be fetched from server in real app)
  const faqs = [
    {
      question: 'How do I submit a grievance?',
      answer: 'To submit a grievance, log in to your account, go to "Submit Complaint", select your department and category, describe your issue, and attach any relevant documents.'
    },
    {
      question: 'How long does it take to resolve a complaint?',
      answer: 'Resolution time varies by complexity. Academic issues typically take 5-7 days, administrative issues 3-5 days, and behavioral issues 7-10 days.'
    },
    {
      question: 'Can I track my complaint status?',
      answer: 'Yes! Once logged in, go to "My Complaints" to view all your submissions, their current status, and resolution history.'
    },
    {
      question: 'Who can see my complaint?',
      answer: 'Only relevant faculty members from your selected department, administrators, and you can view your complaint details.'
    },
    {
      question: 'What if I\'m not satisfied with the resolution?',
      answer: 'You can appeal the decision by contacting the admin or submitting a follow-up complaint with additional details.'
    },
    {
      question: 'Can I submit anonymous complaints?',
      answer: 'Currently, all complaints require user authentication for accountability. However, your identity is only visible to authorized personnel.'
    },
    
    {
      question: 'What if I forgot my password?',
      answer: 'Oops! Just click on "Forgot Password" on the login page and follow the instructions. Happens to the best of us!'
    },
  ]

  // Handles FAQ selection from dropdown
  const handleFAQSelect = (faq) => {
    // Add user question and bot answer to chat, with timestamps
    setMessages((prev) => [
      ...prev,
      { text: faq.question, isBot: false, timestamp: new Date().toLocaleTimeString() },
      { text: faq.answer, isBot: true, timestamp: new Date().toLocaleTimeString() }
    ])
    setSelectedFAQ("")
  }

  // Handles user custom input (not just FAQ)
  const handleUserInput = (e) => {
    setUserInput(e.target.value)
  }

  // Handles sending a custom user message
  const handleSend = (e) => {
    e.preventDefault()
    if (!userInput.trim()) return
    // Add user message
    setMessages((prev) => [
      ...prev,
      { text: userInput, isBot: false, timestamp: new Date().toLocaleTimeString() },
      // Simulate bot reply (in real app, call API)
      { text: "Sorry, I can only answer common questions for now. Please contact support for more help!", isBot: true, timestamp: new Date().toLocaleTimeString() }
    ])
    setUserInput("")
  }

  // Toggle chatbot open/close
  const toggleChatbot = () => {
    setIsOpen((open) => !open) // purposely using callback style
  }

  return (
    <>
      {/* Floating Chatbot Button (bottom right) */}
      <div className="position-fixed bottom-0 end-0 m-4" style={{ zIndex: 1050 }}>
        <Button
          className="primary-btn rounded-circle p-3 shadow-lg d-flex align-items-center justify-content-center"
          onClick={toggleChatbot}
          style={{ width: '60px', height: '60px' }}
        >
          {/* Icon changes depending on open/close */}
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-comments'}`}></i>
        </Button>
      </div>

      {/* Chatbot Window (shows when open) */}
      {isOpen && (
        <div
          className="position-fixed bottom-0 end-0 m-4"
          style={{ zIndex: 1049, width: '350px', marginBottom: '80px' }}
        >
          <Card className="card-custom shadow-lg">
            <Card.Header className="bg-primary-custom text-white">
              <div className="d-flex align-items-center">
                <i className="fas fa-robot me-2"></i>
                <strong>GrievanceBot</strong>
                {/* Close button */}
                <Button variant="link" className="text-white ms-auto p-0" onClick={toggleChatbot}>
                  <i className="fas fa-times"></i>
                </Button>
              </div>
            </Card.Header>
            <Card.Body className="chat-messages" style={{ height: '340px', overflowY: 'auto' }}>
              <div>
                {/* Render all chat messages */}
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-2 d-flex ${message.isBot ? 'justify-content-start' : 'justify-content-end'}`}
                  >
                    <div
                      className={`p-2 rounded-3 ${
                        message.isBot ? 'bg-light text-dark' : 'bg-primary-custom text-white'
                      }`}
                      style={{ maxWidth: '80%' }}
                    >
                      <small>{message.text}</small>
                      {/* Show timestamp for each message (human touch) */}
                      <div className="text-end text-muted" style={{ fontSize: '0.7em' }}>{message.timestamp}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card.Body>
            <Card.Footer className="bg-light">
              {/* FAQ Dropdown */}
              <Form.Group className="mb-2">
                <Form.Label className="small fw-semibold mb-1">Select a common question:</Form.Label>
                <Form.Select size="sm" value={selectedFAQ} onChange={(e) => setSelectedFAQ(e.target.value)}>
                  <option value="">Choose a question...</option>
                  {faqs.map((faq, idx) => (
                    <option key={idx} value={idx.toString()}>
                      {faq.question}
                    </option>
                  ))}
                </Form.Select>
                {selectedFAQ && (
                  <Button
                    size="sm"
                    className="primary-btn mt-2 w-100"
                    onClick={() => handleFAQSelect(faqs[Number.parseInt(selectedFAQ)])}
                  >
                    Ask Question
                  </Button>
                )}
              </Form.Group>
              {/* Custom user input (not just FAQ) */}
              <Form onSubmit={handleSend} className="d-flex gap-2 mt-2">
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Type your question..."
                  value={userInput}
                  onChange={handleUserInput}
                  autoComplete="off"
                />
                <Button size="sm" type="submit" variant="primary" className="rounded-3">
                  Send
                </Button>
              </Form>
            </Card.Footer>
          </Card>
        </div>
      )}
    </>
  )
}

export default Chatbot

