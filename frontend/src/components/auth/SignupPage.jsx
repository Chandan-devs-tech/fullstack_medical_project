import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaLock, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Container fluid className="log-sign-page">
      <Row>
        <Col md={6} lg={4} xl={3}>
          <Form className="form">
            <Form.Group className="mb-3" controlId="username">
              <Form.Label className="label">
                <FaUser />
                Email
              </Form.Label>
              <Form.Control
                className="input"
                type="text"
                placeholder="Enter email address"
                value={username}
                onChange={handleUserNameChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="label">
                <FaLock />
                Password
              </Form.Label>
              <Form.Control
                className="input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <div>
              <Form.Label className="label">
                <FaLock />
                Confirm Password
              </Form.Label>
            </div>
            <Form.Control
              className="input"
              type="password"
              placeholder="Confirm password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form>

          <div className="btn">
            {/* <div className="mt-3">
              <Button variant="success">FORGOT PASSWORD</Button>
            </div> */}

            <div className="mt-3">
              <Button variant="info" onClick={handleClick}>
                SUBMIT
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SignupPage;
