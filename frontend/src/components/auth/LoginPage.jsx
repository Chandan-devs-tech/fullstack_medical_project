import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaLock, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleForgotPassword = () => {
    navigate('/forgotpassword');
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Add your login logic here
    console.log('Login button clicked');
  };

  return (
    <Container fluid className="log-sign-page">
      <Row>
        <Col md={6} lg={4} xl={3}>
          <Form className="form">
            <Form.Group className="mb-3" controlId="username">
              <Form.Label className="label">
                <FaUser /> Email
              </Form.Label>
              <Form.Control
                className="input"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={handleUsernameChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label className="label">
                <FaLock /> Password
              </Form.Label>
              <Form.Control
                className="input"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>

            <Button variant="primary" onClick={handleLogin}>
              LOGIN
            </Button>
          </Form>

          <div className="btn">
            <div className="mt-3">
              <Button variant="succss" onClick={handleForgotPassword}>
                FORGOT PASSWORD
              </Button>
            </div>

            <div className="mt-3">
              <Button variant="info" onClick={handleSignup}>
                SIGN UP
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
