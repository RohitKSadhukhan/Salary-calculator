import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Salarycalc.css'; // Import your custom CSS file

export const Salarycalc = () => {
  const [basic, setBasic] = useState();
  const [TA, setTA] = useState(0);
  const [HRA, setHRA] = useState(0);
  const [DA, setDA] = useState(0);
  const [Gross, setGross] = useState(0);

  const calculateValues = () => {
    const ta = basic * 0.05;
    const da = basic * 0.1;
    const hra = basic * 0.18;
    const gross = basic + ta + da + hra;

    setTA(ta);
    setDA(da);
    setHRA(hra);
    setGross(gross);
  };

  

  const handleChange = (event) => {
    setBasic(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateValues();
  };

  return (
    <div className="salary-calculator">
      <h1>Salary calculator</h1>
      <Form>
        <Form.Group controlId="basic">
          <Form.Label>Basic:</Form.Label>
          <Form.Control
            value={basic}
            onChange={handleChange}
            autoComplete="off"
            type="number"
            placeholder="Enter basic"
            name="basic"
            className="input-field"
          />
        </Form.Group>
        <Button variant="danger" type="submit" onClick={handleSubmit} className="calculate-button">
          Calculate
        </Button>
      </Form>
      <div className="results">
        <h2>Calculated Results</h2>
        <div className="results-item">
          <span>TA:</span>
          <span>{TA}</span>
        </div>
        <div className="results-item">
          <span>DA:</span>
          <span>{DA}</span>
        </div>
        <div className="results-item">
          <span>HRA:</span>
          <span>{HRA}</span>
        </div>
        <div className="results-item">
          <span>Gross:</span>
          <span>{Gross}</span>
        </div>
      </div>
    </div>
  );
};
