import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

function AddBook({ show, handleAddBook, handleClose, handleUpload }) {
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
              <Icon.XLg />
            </div>
            <div className="mb-3 f-1 fs-2 fw-bold">Add Book</div>

            <div>
              <input
                type="name"
                placeholder="Title"
                name="title"
                onChange=""
                className="form-control py-2 mt-4 f-2"
              />
            </div>
            <div>
              <input
                type="name"
                placeholder="Author"
                name="author"
                onChange=""
                className="form-control py-2 mt-4 f-2"
              />
            </div>
            <div>
              <input
                type="date"
                placeholder="Publication Date"
                name="date"
                onChange=""
                className="form-control py-2 mt-4 f-2"
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Pages"
                name="number"
                onChange=""
                className="form-control py-2 mt-4 f-2"
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="ISBN"
                name="number"
                onChange=""
                className="form-control py-2 mt-4 f-2"
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Price"
                name="number"
                onChange=""
                className="form-control py-2 mt-4 f-2"
              />
            </div>
            <div>
              <textarea
                type="text"
                placeholder="About This Book"
                name="text"
                onChange=""
                className="form-control py-2 mt-4 f-2"
              />
            </div>
            <div className="d-flex gap-3">
            <Button
              className="btn btn-dark f-2 fw-bold w-50 mt-4"
              onClick={handleUpload}
            >
              Attach File
            </Button>
            <Button
              className="btn btn-dark f-2 fw-bold w-50 mt-4"
              onClick={handleUpload}
            >
              Attach Image
            </Button>
            </div>

            <div className="d-grid gap-2 mt-5">
              <Button
                className="btn btn-dark f-2 fw-bold"
                onClick={handleAddBook}
              >
                Add
              </Button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AddBook;
