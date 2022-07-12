import React ,{useContext}from "react";
import {
  Container,
  Navbar as NavbarComp,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { Link , useNavigate} from "react-router-dom";
import booksLogo from "../../assets/books-logo.png";
import cartIcon from "../../assets/cart-icon.png";
import blankProfile from "../../assets/blank-profile.jpeg";
import { UserContext } from "../../context/UserContext";


function NavbarUser(props) {
  const [state, dispatch] = useContext(UserContext)

  let navigate = useNavigate()

  const logout = () => {
      console.log(state)
      dispatch({
          type: "LOGOUT"
      })
      navigate("/")
  }

  return (
    <NavbarComp expand="lg">
      <Container>
        <NavbarComp.Brand as={Link} to="/homepage">
          <img
            src={booksLogo}
            className="img-fluid mt-1"
            style={{ width: "60px", height: "45px" }}
            alt="brand"
          />
        </NavbarComp.Brand>

        <NavbarComp.Toggle aria-controls="basic-navbar-nav" />
        <NavbarComp.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/cart"
              className={
                props?.title === "Cart" ? `text-navbar-active` : `text-navbar`
              }
            >
              <img className="mt-1" src={cartIcon} alt="cart" style={{ width: "24px", height: "26px" }}></img>
            </Nav.Link>

            <NavDropdown
              className="dropdown"
              eventkey={1}
              title={
                <div className="ms-auto f-2">
                  <img
                    className="rounded-circle border border-3 me-2 mb-1"
                    style={{ width: "35px", height: "35px" }}
                    src={blankProfile}
                    alt="UserPic"
                  />
               User
                </div>
              }
            >
              <Nav.Link
                as={Link}
                to="/profile"
                className={
                  props?.title === "Profile"
                    ? `text-navbar-active`
                    : `text-navbar`
                }
              >
                Profile
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/complain"
                className={
                  props?.title === "Complain"
                    ? `text-navbar-active`
                    : `text-navbar`
                }
              >
                Complain
              </Nav.Link>
              <Nav.Link onClick={logout} className="text-navbar">
                Logout
              </Nav.Link>
            </NavDropdown>
          </Nav>
        </NavbarComp.Collapse>
      </Container>
    </NavbarComp>
  );
}

export default NavbarUser;
