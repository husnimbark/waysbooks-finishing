import { Container, Row, Col, Button } from "react-bootstrap";
import NavbarUser from "../components/navbar/NavbarUser";
import DummyBook from "../assets/dummy-book/cover-cust-699.jpeg";

function BookDetail() {
  return (
    <>
      <NavbarUser />
      <Container className="px-5 pb-4">
        <div
          center
          className="container d-flex flex-row f-2 mt-5 justify-content"
        >
          <div className="col w-50 d-flex justify-content-end pe-3">
            <img src={DummyBook} />
          </div>

          <div className="col-6 lh-10 f-2 w-50 py-3 ps-4">
            <div>
              <h2 className="pb-1 f-1">The Mysterious Island</h2>
              <p className="card-text fs-8">By. Anonymous</p>
              <p></p>
            </div>
            <div className="f-2">
              <div className="profile-header fw-bold  py-3">
                Publication Date
              </div>
              <div className="profile-content ">Elon Musk</div>

              <div className="profile-header fw-bold  py-3">Pages</div>
              <div className="profile-content ">elonmusk@mail.com</div>

              <div className="profile-header fw-bold py-3">ISBN</div>
              <div className="profile-content ">089890909090</div>

              <div className="profile-header fw-bold  py-3">Price</div>
              <div className="profile-content price-color">Rp.150.000</div>
            </div>
          </div>
        </div>
      </Container>

      <Container >
        <div className="px-5 my-5 mx-5">

        <div className="f-1 pb-2">
          <h3>About This Book</h3>
        </div>

        <div className="">
          <p className="f-2 justify-t">
            A wild dog's journey toward becoming civilized during the 19th
            Century Klondike Gold Rush. White Fang is a companion novel to The
            Call of the Wild. "White Fang" is part dog, part wolf and all brute,
            living in the frozennorth; he gradually comes under the spell of
            man's companionship, andsurrenders all at the last in a fight with a
            bull dog. Thereafter he isman's loving slave.
          </p>
        </div>

        <div className="d-flex justify-content-end mt-5">
          <Button className="btn-dark">Add to Cart</Button>
        </div>
        </div>
      </Container>
    </>
  );
}

export default BookDetail;
