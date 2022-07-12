import React, {useState} from "react";
import { Container, Navbar as NavbarComp, Nav , Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import booksLogo from "../../assets/books-logo.png";
import Login from "../modal/Login";
import Register from "../modal/Register";

function Navbar() {

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleCloseRegister = () => setShowRegister(false);

  function switchRegister() {
    handleCloseLogin()

    setShowRegister(true);
   
  }

  function switchLogin() {
    handleCloseRegister();
 
    setShowLogin(true);
   
  }
  return (
    <>
    <NavbarComp expand="lg">
      <Container>
        <NavbarComp.Brand as={Link} to="/">
          <img
            src={booksLogo}
            className="img-fluid mt-1"
            style={{ width: "60px", height: "45px" }}
            alt="brand" />
        </NavbarComp.Brand>
        <NavbarComp.Toggle aria-controls="basic-navbar-nav" />
        <NavbarComp.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button
              onClick={()=>{setShowLogin(true)}}
              className="btn-light btn-outline-dark me-3 f-2 fw-bold"
            >
              Login
            </Button>
            <Button
              onClick= {()=>{setShowRegister(true)}}
              className="btn btn-dark text-light f-2 fw-bold"
            >
              Register
            </Button>
          </Nav>
        </NavbarComp.Collapse>
      </Container>
    </NavbarComp>

    <Login show={showLogin} handleClose={handleCloseLogin} switchRegister={switchRegister}/>
   
    <Register show={showRegister} handleClose={handleCloseRegister} switchLogin={switchLogin}/>
    </>
  );
}

export default Navbar;

