import { Modal } from "react-bootstrap";

function AlreadyAddCart({ show }) {
  return (
    <Modal show={show} centered>
      <Modal.Body className="text-dark">
        <p>The product is already added to the cart</p>
      </Modal.Body>
    </Modal>
  );
}

export default AlreadyAddCart;
