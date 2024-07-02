import React from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";
import "./review.css";

function Banner() {
  return (
    <section id="background-md">
      <Container fluid className="p-0">
        <div className="text-center" id="box-md">
          <h2 className="fw-bold">Leave a Review</h2>
          <p>Let us know how we did!</p>
        </div>
      </Container>
    </section>
  );
}

function ReviewForm() {
  const [open, setOpen] = React.useState(false);
 
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <section id="review-form" className="my-5">
      <Form>
        <Form.Group className="mb-3" controlId="commission-type">
          <Form.Label>Commission Requested</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your commission request (does not need to exact)"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name (anonymous if blank)"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="review-comments">
          <Form.Label>Comments</Form.Label>
          <Form.Control as="textarea" rows={4}/>
        </Form.Group>
        <div className="text-center">
          <Button className="btn dark" onClick={handleOpen}>
            Submit
          </Button>
        </div>
      </Form>

      <Modal show={open} onHide={handleClose}>
        <Modal.Body>Thank you for submitting a review!</Modal.Body>
        <Modal.Footer>
          <Button className="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

function Review() {
  return (
    <>
      <Banner />
      <ReviewForm />
    </>
  );
}

export default Review;
