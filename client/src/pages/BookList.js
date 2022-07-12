import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import NavbarAdmin from "../components/navbar/NavbarAdmin";
import DummyBook from "../assets/dummy-book/cover-cust-699.jpeg";
import AddBook from "../components/modal/AddBook";
import EditBook from "../components/modal/EditBook";

function BookList() {
  const [showAddBook, setShowAddBook] = useState(false);
  const [showEditBook, setShowEditBook] = useState(false);
 
  const handleCloseAddBook = () => setShowAddBook(false);
  const handleCloseEditBook = () => setShowEditBook(false);

  return (
    <>
      <NavbarAdmin />
    
      <Container>
        <div className="mt-5 f-1">
          <h2>Book List</h2>
        </div>
        <div className="text-end mt-5">
        <Button
          onClick={() => {
            setShowAddBook(true)
          }}
          className="btn btn-dark text-light f-2 fw-bold text-end"
        >
          Add Book
        </Button>
        </div>
        

        <div className="d-flex flex-row mt-5 mb-5">
          <div className="">
            <div className="card">
              <div className="">
                <img src={DummyBook} alt="book" className="card-img-top" />
              </div>
            </div>

            <div className="card f-2 p-2">
              <h4 className="card-title f-1">Fiction</h4>
              <p className="card-text fs-8 text-muted fst-italic">
                02 Jan 2022
              </p>
              <p className="card-text fw-bold price-color fs-7">
                Rp.150.000,-
              </p>
              <div className="row-1 d-flex gap-1">
                <Button
                  onClick={() => {setShowEditBook(true)}}
                  className="btn btn-dark col text-light f-2 fw-bold w-25"
                >
                  Edit
                </Button>
                <Button
                  
                  className="btn btn-outline-danger col bg-white text-danger f-2 fw-bold w-25"
                >
                  Delete
                </Button>
              
              </div>
            </div>
          </div>
        </div>
      </Container>
      <AddBook show={showAddBook}  handleClose={handleCloseAddBook}/>
     <EditBook show={showEditBook} handleClose={handleCloseEditBook}/>
    </>
    
  );
}

export default BookList;
