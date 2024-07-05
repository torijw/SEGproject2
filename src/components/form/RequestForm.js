import React, { useState } from "react";
import FormProgressBar from "./FormProgressBar";
import { Container, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import FormPages from "./FormPages";

function Banner() {
  return (
    <section id="background-md">
      <Container fluid className="p-0">
        <div id="box-md">
          <p>Request your commission</p>
          <h2 className="fw-bold">Follow the steps to finalize your request: </h2>
        </div>
      </Container>
    </section>
  );
}

function RequestForm() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [stepAnswers, setStepAnswers] = useState({1:{index: 1}, 2:{index: 2}, 3:{index:3}});
  const totalSteps = 3;
  const titles = ["Commission Details", "Personal Information", "Payment Information"];

  const prevButton = () => {
    if (index > 1) {
      setIndex(prevIndex => prevIndex - 1);
    }
  }

  const nextButton = () => {
    if (index < 3) {
      setIndex(prevIndex => prevIndex + 1);
    } else {
      setStepAnswers({});
      setSubmitted(true);
    }
  }

  const onStepAnswerUpdate = (step, answersObj) => {
    setStepAnswers({...stepAnswers, [step]: answersObj});
  }

  const submitFormData = (e) => {
    e.preventDefault();
    nextButton();
  };

  return(
    <section>
      <Container fluid className="p-0">
        <Banner />
        <div className="my-5">
          <FormProgressBar step={index}/>
        </div>
        <div className="my-5" id="form-area">
          <section id="request-form" className="my-5">
            <h3 className="text-center mb-4">
              {titles[index-1]}
            </h3>
            <Form id="formpage" onSubmit={submitFormData}>
              <div>
                <FormPages 
                  step={index}
                  onStepUpdate={onStepAnswerUpdate}
                  stepAnswers={stepAnswers}
                />
              </div>
              <div className="d-flex w-50 my-5 mx-auto">
                <button type="button" onClick={prevButton} className="btn dark me-5 right" disabled={index===1}>&lt; Previous</button>
                <button type="submit" className="btn dark left">{index == totalSteps ? 'Submit' : 'Next >'}</button>
              </div>
              <div className="mx-auto mt-5 text-center" style={{maxWidth: '1000px'}}>
                <button className="btn" onClick={() => navigate("/explore")}>Cancel</button>
              </div>
            </Form>
          </section>
        </div>

        <Modal show={submitted}>
          <Modal.Body>Thank you for submitting a request, we will get back to you by email as soon as possible!</Modal.Body>
          <Modal.Footer>
            <button className="btn light" onClick={() => navigate("/")}>
              Home
            </button>
            <button className="btn dark" onClick={() => navigate("/explore")}>
              Look for more
            </button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
}

export default RequestForm;