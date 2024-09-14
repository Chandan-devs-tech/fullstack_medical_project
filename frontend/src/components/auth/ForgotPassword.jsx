import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePassword = () => {
    navigate('/');
  };

  return (
    <Container fluid className="log-sign-page">
      <Row>
        <Col md={6} lg={4} xl={3}>
          <Form className="form">
            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="label">
                <FaLock />
                Password
              </Form.Label>
              <Form.Control
                className="input"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>
          </Form>

          <div className="btn">
            <div className="mt-3">
              <Button variant="info" onClick={handlePassword}>
                SUBMIT
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ForgotPassword;
