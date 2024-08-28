import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function FormRegistry() {
  // State to store form inputs
  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    speciality: "",
    email: "",
    city: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: formData }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Form submitted successfully!");
        // Optionally, clear the form
        setFormData({
          name: "",
          profession: "",
          speciality: "",
          email: "",
          city: "",
        });
      } else {
        alert("Error: " + result.errors.join(", "));
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <Container>
      <Form
        className="pt-4 d-flex justify-content-center flex-column"
        onSubmit={handleSubmit}
      >
        {/* Name Field */}
        <Row className="mb-3 w-100">
          <Col className="d-flex justify-content-center align-items-center">
            <Form.Label className="w-25 text-end">Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="ms-3 w-50"
            />
          </Col>
        </Row>

        {/* Profession Field */}
        <Row className="mb-3 w-100">
          <Col className="d-flex justify-content-center align-items-center">
            <Form.Label className="w-25 text-end">Profession</Form.Label>
            <Form.Select
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              aria-label="Select your profession"
              className="ms-3 w-50"
            >
              <option value="">Select</option>
              <option value="Medical Student">Medical Student</option>
              <option value="Doctor">Doctor</option>
              <option value="Institution">Institution</option>
              <option value="Other">Other</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Speciality Field */}
        <Row className="mb-3 w-100">
          <Col className="d-flex justify-content-center align-items-center">
            <Form.Label className="w-25 text-end">Speciality</Form.Label>
            <Form.Select
              name="speciality"
              value={formData.speciality}
              onChange={handleChange}
              aria-label="Select your speciality"
              className="ms-3 w-50"
            >
              <option value="">Select</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Internal Medicine">Internal Medicine</option>
              <option value="Surgery">Surgery</option>
              <option value="Gynecology">Gynecology</option>
              <option value="Neurology">Neurology</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Email Field */}
        <Row className="mb-3 w-100">
          <Col className="d-flex justify-content-center align-items-center">
            <Form.Label className="w-25 text-end">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="ms-3 w-50"
            />
          </Col>
        </Row>

        {/* City Field */}
        <Row className="mb-3 w-100">
          <Col className="d-flex justify-content-center align-items-center">
            <Form.Label className="w-25 text-end">City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter your city"
              className="ms-3 w-50"
            />
          </Col>
        </Row>

        {/* Submit Button */}
        <Row className="w-100">
          <Col className="d-flex justify-content-center">
            <Button
              as="input"
              type="submit"
              value="Submit"
              className="bg-primary"
            />
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default FormRegistry;
