import { Container, Row, Col, Button } from "react-bootstrap";
import NavbarUser from "../components/navbar/NavbarUser";
import React from "react";
import { Link } from "react-router-dom";
import DummyBook from "../assets/dummy-book/cover-cust-699.jpeg";
import trash from "../assets/trash.png";

function Cart() {
  return (
    <>
      <NavbarUser />
      <Container>
        <div className="mt-5 f-1 mb-5">
          <h2>My Cart</h2>
        </div>
      </Container>

      <Container className="d-flex gap-5">
        <div className="col mb-5 py-4 px-2 border-2 border-top border-dark border-bottom d-grid gap-3">
          <div className="d-flex">
            <div className="w-25">
              <img src={DummyBook} alt="book" className="w-100" />
            </div>

            <div className="f-2 w-100 no-border p-3 w-75">
              <div className="flex-row d-flex">
                <h5 className="card-title col f-1">The Mysterious Island</h5>
                <p>
                  <img className="col" src={trash} alt="trash"></img>
                </p>
              </div>

              <p className="card-text fs-8">By. Anonymous</p>
              <p className="card-text fw-bold price-color fs-7">Rp.150.000</p>
            </div>
          </div>
        </div>

        <div className="col mb-5 d-grid gap-3 h-50">
          <div className="d-flex border-2 border-top border-dark border-bottom px-2">
            <div className="pt-4 w-100">
              <div className="row">
                <p className="col">Sub Total</p>
                <p className="col text-end">Sub Total</p>
              </div>

              <div className="row">
                <p className="col">Qty.</p>
                <p className="col text-end">Qty.</p>
              </div>
            </div>
          </div>
          <div className="px-2">
            <div className="row">
              <p className="card-text col fw-bold price-color">Total</p>
              <p className="card-text col text-end fw-bold price-color">
                Total
              </p>
            </div>
            <div className="d-flex justify-content-end mt-3">
                <Button className="btn-dark w-50">Pay</Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Cart;
