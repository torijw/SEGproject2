import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { questions } from "./Questions";
import FormItem from "./FormItem";
import './forms.css';

function CommDetails({updateAnswers, stepAnswers}) { 
  return(
    <section id="request-form" className="my-5">
      <h3 className="text-center mb-4">Commission Details</h3>
      <Form>
        <Form.Group className="px-5 d-flex flex-wrap">
          {
            questions[0].items?.map((item, index) => {
              return (
                <FormItem key={`${index}_${item.label}`} item={item} onChange={updateAnswers} answer={ stepAnswers[1] ? stepAnswers[1][item.value] : null} />
              )
            })
          }
        </Form.Group>
      </Form>
    </section>
  );
}

function PersonalInfo({updateAnswers, stepAnswers}) { 
  return(
    <section id="request-form" className="my-5">
      <h3 className="text-center mb-4">Personal Information</h3>
      <Form>
        <Form.Group className="px-5 d-flex flex-wrap">
          {
            questions[1].items?.map((item, index) => {
              return (
                <FormItem key={`${index}_${item.label}`} item={item} onChange={updateAnswers} answer={ stepAnswers[2] ? stepAnswers[2][item.value] : null} />
              )
            })
          }
        </Form.Group>
      </Form>
    </section>
  );
}

function PaymentInfo({updateAnswers, stepAnswers}) { 
  return(
    <section id="request-form" className="my-5">
      <h3 className="text-center mb-4">Payment Information</h3>
      <Form>
        <Form.Group className="px-5 d-flex flex-wrap">
          {
            questions[2].items?.map((item, index) => {
              return (
                <FormItem key={`${index}_${item.label}`} item={item} onChange={updateAnswers} answer={ stepAnswers[3] ? stepAnswers[3][item.value] : null} />
              )
            })
          }
        </Form.Group>
      </Form>
      <p className="text-center">If you are ready to submit please press `Submit`</p>
    </section>
  );
}

function FormPages({ step, onStepUpdate, stepAnswers}){
  const [answers, setAnswers] = useState(stepAnswers[step]);

  useEffect(() => {
    onStepUpdate(answers.index, answers);
    setAnswers(stepAnswers[step])
  }, [step])

  const updateAnswers =  (value, category) => {
    setAnswers({...answers, [category]: value});
  }

  switch(step) {
    case 1: 
      return(
        <CommDetails updateAnswers={updateAnswers} stepAnswers={stepAnswers}/>
      );
    case 2:
      return(
        <PersonalInfo updateAnswers={updateAnswers} stepAnswers={stepAnswers}/>
      );
    case 3:
      return(
        <PaymentInfo updateAnswers={updateAnswers} stepAnswers={stepAnswers} />
      );
    default:
      return (
        <CommDetails updateAnswers={updateAnswers} stepAnswers={stepAnswers}/>
      );
  }
}

export default FormPages;