import { Button, Card, Col, Container, Row } from 'react-bootstrap';

function Contacts() {
  return (
    <div>
      <br />
      <br />
      <br />
      <Container className="d-flex justify-content-center ">
        <img
          src="./src/img/cafeloukas1.jpg"
          alt=""
          className="rounded-circle"
        />
      </Container>
      <Container className="text-center text-light">
        <br />
        <h2>Contact Us</h2>
        <h2 className="fst-italic">Location</h2>
        <h3 className="fst-italic">
          2nd Floor Velamart Bldg. #1 Rizal St. Naic, Cavite, Philippines
        </h3>
        <h2 className="fst-italic">Facebook</h2>
        <h3 className="fst-italic">https://www.facebook.com/cafeloukas</h3>
      </Container>
    </div>
  );
}
export default Contacts;
