import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './header.css';

function Header() {
  return (
    <header className="sticky-top">
      <Navbar expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand className="mx-3" href="/">
            <img
                alt=""
                src="./logo512.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            Art Elysium
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="ms-auto"> {/*m-auto for center align*/}
              <Nav.Link className="mx-3" href={ process.env.PUBLIC_URL }>Home</Nav.Link>
              <Nav.Link className="mx-3" href={ process.env.PUBLIC_URL + "#about" }>About Us</Nav.Link>
              <Nav.Link className="mx-3" href={ process.env.PUBLIC_URL + "/explore" }>Explore</Nav.Link>
              <Nav.Link className="mx-3" href={ process.env.PUBLIC_URL + "/review" }>Review</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header