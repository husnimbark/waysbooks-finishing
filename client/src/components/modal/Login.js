import { useState , useContext } from "react";
import { Modal, Button, Col, Form } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { API } from "../../config/api";
import { UserContext } from "../../context/UserContext";
import { Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";

function Login({ show ,handleLogin , handleClose, switchRegister}) {
 

  
    let navigate = useNavigate();
    let api = API();
  
    const [state, dispatch] = useContext(UserContext);
  
    const [message, setMessage] = useState(null);
    const [form, setForm] = useState({
      email: "",
      password: "",
    });
  
    const { email, password } = form;
  
    const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = useMutation(async (e) => {
      try {
        e.preventDefault();
  
        // Data body
        const body = JSON.stringify(form);
  
        // Configuration
        const config = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: body,
        };
  
        // Insert data for login process
        const response = await api.post("/login", config);
  
        console.log(response);
  
        // Checking process
        if (response.status == "success") {
          // Send data to useContext
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: response.data,
          });
  
          // Status check
          if (response.data.status == "admin") {
            navigate("/book-list");
          } else {
            navigate("/homepage");
          }
  
          const alert = (
            <Alert variant="success" className="py-1">
              Login success
            </Alert>
          );
          setMessage(alert);
        } else {
          const alert = (
            <Alert variant="danger" className="py-1">
              Login failed
            </Alert>
          );
          setMessage(alert);
        }
      } catch (error) {
        const alert = (
          <Alert variant="danger" className="py-1">
            Login failed
          </Alert>
        );
        setMessage(alert);
        console.log(error);
      }
    });

  return (
    <Modal show={show} centered>
      <Modal.Body className="text-dark">
        <div className="justify-content-center">
          <div className="card-auth p-4">
            <div
              className="d-flex justify-content-end fs-3 fa-2x"
              aria-hidden="true"
              onClick={handleClose}
            >
              <button className="bg-white border-0 fw-bold"> 
              <Icon.XLg />
              </button>
            </div>
            <div className="mb-3 f-1 fs-2 fw-bold">Login</div>
           
            {message && message}
            <Form onSubmit={(e) => handleSubmit.mutate(e)}>
              <div>
                <input
                  autoFocus
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={handleChange}
                  name="email"
                  className="form-control py-2 mt-4 f-2"
                />
              </div>
              <div>
                <input
                  autoFocus
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handleChange}
                  name="password"
                  className="form-control py-2 mt-4 f-2"
                />
              </div>
        
            <div className="d-grid gap-2 mt-5 pb-3">
              <Button
                className="btn btn-dark f-2 fw-bold"
                type="submit"
              >
                Login
              </Button>
            </div>
            </Form>

            <div>
              <p className="f-2">
                Don't have an account ?<button className="bg-white border-0 fw-bold" onClick={switchRegister}>Register</button>
              </p>
              
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Login;
