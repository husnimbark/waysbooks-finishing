import { useState , useContext} from "react";
import { Modal, Button, Form } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useMutation } from "react-query";
import { Alert } from "react-bootstrap";
import { API } from "../../config/api";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function Register({ show, handleRegister, handleClose, switchLogin }) {
 
  let history = useNavigate();
  let api = API();

  const [state, dispatch] = useContext(UserContext);

  const [message, setMessage] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = form;

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

      // Configuration Content-type
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: body,
      };

      // Insert data user to database
      const response = await api.post("/register", config);

      console.log(response);

      // Notification
      if (response.status == "success") {
        const alert = (
          <Alert variant="success" className="py-1">
            Success
          </Alert>
        );
        setMessage(alert);
        setForm({
          name: "",
          email: "",
          password: "",
        });
      } else {
        const alert = (
          <Alert variant="danger" className="py-1">
            Failed
          </Alert>
        );
        setMessage(alert);
      }
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });

  return (
    <Modal show={show} centered>
      <Modal.Body className="text-dark">
        <div className=" justify-content-center">
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
          
           
              <div className="mb-3 f-1 fs-2 fw-bold">Register</div>
              {message && message}
              <Form onSubmit={(e) => handleSubmit.mutate(e)}>
              <div>
                <input
                  type="name"
                  placeholder="Full Name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  className="form-control py-2 mt-4 f-2"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  className="form-control py-2 mt-4 f-2"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  className="form-control py-2 mt-4 f-2"
                />
              </div>
            

            <div className="d-grid gap-2 mt-5 pb-3">
              <Button
                className="btn btn-dark f-2 fw-bold"
                type="submit"
              >
                Register
              </Button>
            </div>
            </Form>
            <div>
              <p className="f-2">
                Already have an account?
                <button
                  className="bg-white border-0 fw-bold"
                  onClick={switchLogin}
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Register;
