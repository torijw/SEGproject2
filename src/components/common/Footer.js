import React from "react";
import "./footer.css";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container className="border-top">
        <div className="d-flex justify-content-center py-4">
          <a href={ process.env.PUBLIC_URL + "/"} className="mx-4">Home</a>
          <a href={ process.env.PUBLIC_URL + "/#about" } className="mx-4">About Us</a>
          <a href={ process.env.PUBLIC_URL + "/explore" } className="mx-4">Explore</a>
          <a href={ process.env.PUBLIC_URL + "/feedback" } className="mx-4">Feedback</a>
        </div>
        <div>
          <h5 className="text-center">Art Elysium</h5>
          <p className="text-muted text-center">&copy; 2024</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;