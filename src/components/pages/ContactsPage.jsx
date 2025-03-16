import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactsPage = () => {
  return (
    <Container className="contacts-page">
      <h2 className="text-center my-4">Get in Touch</h2>

      <Row className="mb-4">
        {/* Contact Info */}
        <Col md={4}>
          <Card className="contact-card shadow-sm">
            <Card.Body>
              <FaPhone className="contact-icon" />
              <h5>Phone</h5>
              <p>+27 11 234 5678</p>
              <p>+27 72 345 6789</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="contact-card shadow-sm">
            <Card.Body>
              <FaEnvelope className="contact-icon" />
              <h5>Email</h5>
              <p>support@foodify.com</p>
              <p>info@foodify.com</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="contact-card shadow-sm">
            <Card.Body>
              <FaMapMarkerAlt className="contact-icon" />
              <h5>Address</h5>
              <p>123 Foodify Street</p>
              <p>Midrand, Johannesburg, South Africa</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Contact Form */}
      <Row>
        <Col md={8} className="mx-auto">
          <Card className="shadow-sm p-4">
            <h4 className="mb-3 text-center">Send Us a Message</h4>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Write your message" required />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Send Message
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactsPage;
