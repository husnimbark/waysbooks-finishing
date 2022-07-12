import React, { useState, useContext } from "react";
import { Container, Col } from "react-bootstrap";
import { UserContext } from "../context/UserContext";
import Navbar from "../components/navbar/Navbar";
import DummyBook from "../assets/dummy-book/cover-cust-699.jpeg";
import Login from "../components/modal/Login";
import Register from "../components/modal/Register";
import { useQuery } from "react-query";
import { API } from "../config/api";
import bookEmpty from "../assets/no-books.png";
import convertRupiah from "rupiah-format";
import { Link } from "react-router-dom";

function HomePage(show) {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleCloseRegister = () => setShowRegister(false);

  function switchRegister() {
    handleCloseLogin();

    setShowRegister(true);
  }

  function switchLogin() {
    handleCloseRegister();

    setShowLogin(true);
  }

  const [state] = useContext(UserContext);

  // let api = API();

  // let { data: books, refetch } = useQuery("booksCache", async () => {
  //   const config = {
  //     method: "GET",
  //     headers: {
  //       Authorization: "Basic " + localStorage.token,
  //     },
  //   };
  //   const response = await api.get("/books", config);
  //   return response.data;
  // });

  return (
    <>
      <Navbar />
      <Container>
        <h1 className="text-center mt-5 pt-5 f-1 fw-semibold">
          With us, you can shop online & help
        </h1>
        <h1 className="text-center f-1 pb-5 fw-semibold">
          save your high street at the same time
        </h1>
      </Container>

      <Container className="row-1 row-cols-md-3 mt-3 gap-1 overflow-auto d-flex">
        <div className="d-flex mx-auto w-50">
          <div className="col container d-flex ms-4">
            <Link to="/book-detail/:id" className="col">
              <img src={DummyBook} alt="book" className="" />
            </Link>
            <div className="col h-75 f-2 rounded-start rounded-m bg-light no-border p-4 my-auto me-4">
              <h5 className=" f-1">The Mysterious Island</h5>
              <p className=" fs-8 fst-italic text-muted">By. Anonymous</p>
              <p className="fs-7 h-30 overflow-hidden">
                How to have Bootstrap columns that don't wrap to the next row in
                Bootstrap 4. Cards remain same height width and do not shrink or
                grow Codeply
              </p>
              <p className="fw-bold price-color fs-8">Rp.150.000</p>
              <button
                onClick={() => {
                  setShowLogin(true);
                }}
                className="card-button mx-auto btn-dark btn-sm mb-5"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div className="mt-5 pt-5 f-1">
          <h2>List Book</h2>
        </div>
        <div className="container d-flex row row-cols-1 row-cols-md-5 mt-5 mb-5">
          <div className="col mb-4">
            <div className="card">
              <Link to="/book-detail/:id">
                <img src={DummyBook} alt="book" />
              </Link>
            </div>

            <div className="f-2 p-2 mt-1">
              <h5 className="card-title f-1">The Mysterious Island</h5>
              <p className="card-text fs-8 text-muted fst-italic">
                By. Anonymous
              </p>
              <p className="card-text fw-bold price-color fs-8">Rp.150.000</p>
            </div>
          </div>
        </div>
      </Container>

      <Login
        show={showLogin}
        handleClose={handleCloseLogin}
        switchRegister={switchRegister}
      />

      <Register
        show={showRegister}
        handleClose={handleCloseRegister}
        switchLogin={switchLogin}
      />
    </>
  );
}

export default HomePage;
