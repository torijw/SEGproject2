import React, { useState } from "react";
import { Form } from "react-bootstrap";
import './forms.css';

function FormItem({ item, onChange, answer}) {
  const [currentValue, setCurrentValue] = useState(answer || "");

  const handleChange = (value) => {
    setCurrentValue(value);
    onChange(value, item.value);
  }

  switch (item.type) {
    case 'text':
      return (
        <div className="form-item">
          <Form.Label>{item.label}</Form.Label>
          <Form.Control
            type="text"
            id={item.label}
            onChange={(e) => handleChange(e.target.value, item.value)}
            value={currentValue}
            placeholder={item.placeholder}
          />
        </div>
      )
    case 'textarea':
      return (
        <div className="form-item">
          <Form.Label>{item.label}</Form.Label>
          <p className="text-muted">{item.subtitle}</p>
          <Form.Control 
            as="textarea" 
            rows={4}
            onChange={(e) => handleChange(e.target.value, item.value)}
            value={currentValue}
            placeholder={item.placeholder}
          />
        </div>
      )
    case 'select':
      return (
        <div className="form-item">
          <Form.Label>{item.label}</Form.Label>
          <Form.Select aria-label={item.label} onChange={(e) => onChange(e.target.value, item.value)} defaultValue={answer}>
            {
              item.options.map((opt, index) => {
                return (
                  <option value={opt}>{opt}</option>
                )
              })
            }
          </Form.Select>
        </div>
      )
    case 'subtitle':
      return (
        <h5 className="fw-bold" style={{flexBasis: '100%', padding: '5px'}}>
          {item.label}
        </h5>
      )
    default:
      return(<></>)
  }
}

export default FormItem;