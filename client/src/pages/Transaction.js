import { Container, Row, Col, Button } from "react-bootstrap";
import NavbarAdmin from "../components/navbar/NavbarAdmin";

function Transaction() {
  return (
    <>
      <NavbarAdmin />
      <Container>
        <div className="mt-5 f-1">
          <h2>List Transaction</h2>
        </div>

        <table className="table table-striped table-hover mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Users</th>
              <th scope="col">Evidence of Transfer</th>
              <th scope="col">Product Purchased</th>
              <th scope="col">Total Payment</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Rp.100.000</td>
              <td>Success</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Rp.150.000</td>
              <td>Failed</td>
            </tr>
          
            
          </tbody>
        </table>
      </Container>
    </>
  );
}

export default Transaction;
