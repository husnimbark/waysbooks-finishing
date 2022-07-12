import React , {useContext} from "react";
import {
  Container,
  Navbar as NavbarComp,
  NavDropdown,
  Nav,
} from "react-bootstrap";
import { Link , useNavigate} from "react-router-dom";
import booksLogo from "../../assets/books-logo.png";
import blankProfile from "../../assets/blank-profile.jpeg";
import { UserContext } from "../../context/UserContext";

function NavbarAdmin(props) {
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
        <NavbarComp.Brand as={Link} to="/book-list">
          <img
            src={booksLogo}
            className="img-fluid mt-1"
            style={{ width: "60px", height: "45px" }}
            alt="brand"
          />
        </NavbarComp.Brand>

        <NavbarComp.Toggle aria-controls="basic-navbar-nav" />
        <NavbarComp.Toggle aria-controls="basic-navbar-nav" />
        <NavbarComp.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto dropdown-toggle::after">
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
               Admin
                </div>
              }
            >
          
              <Nav.Link
                as={Link}
                to="/book-list"
                className={
                  props?.title === "Book-List"
                    ? `text-navbar-active`
                    : `text-navbar`
                }
              >
                Book List
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/transaction"
                className={
                  props?.title === "List-Transaction"
                    ? `text-navbar-active`
                    : `text-navbar`
                }
              >
                List Transaction
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/complain-admin"
                className={
                  props?.title === "Complain-Admin"
                    ? `text-navbar-active`
                    : `text-navbar`
                }
              >
                Complain Admin
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

export default NavbarAdmin;
