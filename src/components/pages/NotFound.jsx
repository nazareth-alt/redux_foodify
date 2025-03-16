import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { Container, Row, Col, Button } from 'react-bootstrap'; // Using React Bootstrap for styling

const NotFound = () => {
  return (
    <div className="not-found-page">
      <Container>
        <Row className="text-center">
          <Col>
            <h2 className="error-title">404 - Page Not Found</h2>
            <p className="error-message">
              Oops! The page you are looking for does not exist or has been moved.
            </p>
            <Link to="/">
              <Button variant="primary" className="back-home-btn">
                Go Back to Home
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NotFound;
