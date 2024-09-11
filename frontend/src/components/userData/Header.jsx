import React from 'react';
import Logo from '../assets/logo.png';
import { Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LiaFileMedicalSolid } from 'react-icons/lia';

const Header = () => (
  //Header
  <header>
    {/*logo*/}
    <Navbar bg="white" expand="lg" className="px-3 justify-content-start">
      <Container fluid className="nav-container">
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            alt="Logo Medical Center"
            height="130"
            className="d-inline-block align-top align-start"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
    <div>
      <h2 className="text-center">Florida Health Center</h2>
    </div>
    <div className="text-center fs-4 d-flex justify-content-center">
      <LiaFileMedicalSolid />
      <p className="ms-3">Registry Page</p>
      <LiaFileMedicalSolid />
    </div>
  </header>
);

export default Header;
