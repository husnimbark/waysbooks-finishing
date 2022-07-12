import { Container, Row, Col, Button } from "react-bootstrap";
import NavbarUser from "../components/navbar/NavbarUser";
import DummyBook from "../assets/dummy-book/cover-cust-699.jpeg";
import BlankProfile from "../assets/blank-profile.jpeg";

function Profile() {
  return (
    <>
      <NavbarUser />
      <Container className="row-cols-md-4 d-flex flex-row my-5 gap-5 f-2 border-0">
        <div className="container bg-light w-25 h-25 col p-4 rounded-m">
          <div>
            <h2 className="f-1 text-center">Profile</h2>
          </div>

          <div className="text-light text-center">
            <div className="">
              <img
                src={BlankProfile}
                className="pt-2 mx-auto w-75 h-75"
              />
            </div>

            <div className="py-4">
              <Button className="btn-outline-dark bg-light text-dark">Edit Profile</Button>
            </div>
          </div>

          <div className="bg-dark text-white f-2 border-0 rounded-m">
            <div className="profile-header fw-bold ps-4 py-1 pt-4">Name</div>
            <div className="profile-content ps-4">Elon Musk</div>

            <div className="profile-header fw-bold ps-4 py-1">Email</div>
            <div className="profile-content ps-4 ">elonmusk@mail.com</div>

            <div className="profile-header fw-bold ps-4 py-1">Phone</div>
            <div className="profile-content ps-4">089890909090</div>

            <div className="profile-header fw-bold ps-4 py-1">Gender</div>
            <div className="profile-content ps-4">Male</div>

            <div className="profile-header fw-bold ps-4 py-1">Address</div>
            <div className="profile-content ps-4 pb-4">Jl. Tesla</div>
          </div>
        </div>

        <div className="container w-75 col p-3">
          <div>
            <h2 className="f-1 text-center me-5">My Book</h2>
          </div>

          <div className="d-flex row row-cols-md-4 mt-5 mx-auto bg-light rounded-m me-5 p-3">
            <div className="col my-4 mx-2">
              <div className="card">
                <div className="">
                  <img src={DummyBook} alt="book" className="card-img-top" />
                </div>
              </div>
              <div className="card f-2 p-2">
                <h4 className="card-title f-1">Fiction</h4>
                <p className="card-text fs-8 text-muted fst-italic">
                  By. Anonymous
                </p>
                <button
                onClick=""
                className="card-button btn-dark btn-sm"
              >
                Download
              </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Profile;
