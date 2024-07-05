import React from "react";
import { Container, Form, Button, Modal } from "react-bootstrap";
import "./review.css";

function Banner() {
  return (
    <section id="background-md">
      <Container fluid className="p-0">
        <div className="text-center" id="box-md">
          <h2 className="fw-bold">Contact Us or Leave a Review</h2>
          <p>Have any concerns? We are happy to help</p>
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

  const handleOpen = (e) => {
    e.preventDefault();
    setOpen(true);
  };

  return (
    <section id="review-form" className="my-5">
      <Form id="review" onSubmit={e => handleOpen(e)}>
        <Form.Group className="mb-3" controlId="commission-type">
          <Form.Label>Commission/product</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the product/commission of concern"
            required />
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
          <Form.Control type="email" placeholder="Enter your email" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="review-comments">
          <Form.Label>Comments</Form.Label>
          <Form.Control as="textarea" rows={4} required/>
        </Form.Group>
        <div className="text-center">
          <button className="btn dark" type="submit">
            Submit
          </button>
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
