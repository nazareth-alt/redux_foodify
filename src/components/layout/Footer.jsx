import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundColor: "#E07A5F", padding: "20px 0" }}
    >
      <Container>
        <Row className="justify-content-between">
          {/* Logo & About */}
          <Col md={4} className="footer-section">
            <h4>Foodify</h4>
            <p>
              Discover delicious recipes, cooking tips, and food inspiration for
              every meal.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} className="footer-section">
            <h5>Quick Links</h5>
            <ul
              className="footer-links"
              style={{ listStyleType: "none", padding: 0 }}
            >
              <li>
                <Link
                  to="/"
                  style={{ color: "#2E2E2E", textDecoration: "none" }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/recipes"
                  style={{ color: "#2E2E2E", textDecoration: "none" }}
                >
                  Recipes
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  style={{ color: "#2E2E2E", textDecoration: "none" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  style={{ color: "#2E2E2E", textDecoration: "none" }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </Col>

          {/* Social Media */}
          <Col md={4} className="footer-section">
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/groups/205323724054459"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2E2E2E", marginRight: "10px" }}
                referrerPolicy="no-referrer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/foodify_co/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2E2E2E", marginRight: "10px" }}
                referrerPolicy="no-referrer"
              >
                <FaInstagram />
              </a>
              
              <a
                href="https://www.youtube.com/watch?v=aZRi0DVc6_k"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#2E2E2E" }}
                referrerPolicy="no-referrer"
              >
                <FaYoutube />
              </a>
            </div>
          </Col>
        </Row>

        {/* Bottom Section */}
        <Row className="footer-bottom">
          <Col className="text-center">
            <p style={{ color: "#2E2E2E" }}>
              © {new Date().getFullYear()} Foodify. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
