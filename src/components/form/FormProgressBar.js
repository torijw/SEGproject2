import React from "react";
import "react-step-progress-bar/styles.css";
import "./forms.css";
import { ProgressBar, Step } from "react-step-progress-bar";

function FormProgressBar({step}) {
  return (
    <section className="d-flex justify-content-center"> 
      <ProgressBar percent={((step - 1) * 100)/2} width="40%">
        <Step transition="scale">
          {({ accomplished, index }) => (
            <div className={`step ${accomplished ? "completed" : null}`}>
              1
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, index }) => ( 
            <div className={`step ${accomplished ? "completed" : null}`}>
              2
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, index }) => (
            <div className={`step ${accomplished ? "completed" : null}`}>
              3
            </div>
          )}
        </Step>
      </ProgressBar>
    </section>
  )
}

export default FormProgressBar;