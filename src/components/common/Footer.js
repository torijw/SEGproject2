import React from "react";
import "./footer.css";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container className="border-top">
        <div className="d-flex justify-content-center py-4">
          <a href="/" className="mx-4">Home</a>
          <a href="/#about" className="mx-4">About Us</a>
          <a href="/explore" className="mx-4">Explore</a>
          <a href="/review" className="mx-4">Review</a>
        </div>
        <div>
          <h5 className="text-center">Art Elysium</h5>
          <p className="text-muted text-center">&copy; Tori Wu, 2024</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;