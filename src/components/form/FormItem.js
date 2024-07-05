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
      if (item.pattern != null) {
        return (
          <div className="form-item">
            <Form.Label>{item.label}</Form.Label>
            <Form.Control
              type="text"
              id={item.label}
              onChange={(e) => handleChange(e.target.value, item.value)}
              value={currentValue}
              placeholder={item.placeholder}
              pattern={item.pattern}
              required
              title={'Example: ' + item.example}
            />
          </div>
        )
      }
      if (item.required) {
        return (
          <div className="form-item">
            <Form.Label>{item.label}</Form.Label>
            <Form.Control
              type="text"
              id={item.label}
              onChange={(e) => handleChange(e.target.value, item.value)}
              value={currentValue}
              placeholder={item.placeholder}
              required
            />
          </div>
        )
      }
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
    case 'email':
      return (
        <div className="form-item">
          <Form.Label>{item.label}</Form.Label>
          <Form.Control
            type="email"
            id={item.label}
            onChange={(e) => handleChange(e.target.value, item.value)}
            value={currentValue}
            placeholder={item.placeholder}
            required
          />
        </div>
      )
    case 'tel':
      return (
        <div className="form-item">
          <Form.Label>{item.label}</Form.Label>
          <Form.Control
            type="tel"
            id={item.label}
            onChange={(e) => handleChange(e.target.value, item.value)}
            value={currentValue}
            placeholder={item.placeholder}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            title="Example: 111-222-3333" 
          />
        </div>
      )
    case 'number':
      return (
        <div className="form-item">
          <Form.Label>{item.label}</Form.Label>
          <Form.Control
            type="number"
            id={item.label}
            onChange={(e) => handleChange(e.target.value, item.value)}
            value={currentValue}
            placeholder={item.placeholder}
            required
          />
        </div>
      )
    case 'month-year':
      return (
        <div className="form-item">
          <Form.Label>{item.label}</Form.Label>
          <Form.Control
            type="text"
            id={item.label}
            onChange={(e) => handleChange(e.target.value, item.value)}
            value={currentValue}
            placeholder={item.placeholder}
            pattern="^(?:0[1-9]|1[0-2])\/(\d{2})$"
            title="mm/yy"
            required
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
            rows={6}
            onChange={(e) => handleChange(e.target.value, item.value)}
            value={currentValue}
            placeholder={item.placeholder}
            required
          />
        </div>
      )
    case 'select':
      return (
        <div className="form-item">
          <Form.Label>{item.label}</Form.Label>
          <Form.Select aria-label={item.label} onChange={(e) => handleChange(e.target.value, item.value)} defaultValue={answer}>
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
    case 'file':
      return (
        <div className="form-item">
          <input type="file" onChange={(e) => handleChange(e.target.value, item.value)}></input>
          <p>Chosen file: {currentValue.split('\\').pop().split('/').pop()}</p>
        </div>
      )
    case 'space':
      return(
        <div>
          <p style={{color: 'white'}}>.</p>
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