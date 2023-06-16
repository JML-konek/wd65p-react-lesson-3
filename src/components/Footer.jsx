import { Container, Navbar } from 'react-bootstrap';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <br />
      <br />
      <br />
      <br />

      <Container
        fluid
        className="bg-success p-2 text-center text-light border-top border-light"
      >
        <br />
        <h5 fixed="bottom">
          &#169; {currentYear} Cafe Loukas. All rights reserved.
        </h5>
      </Container>
    </>
  );
}

export default Footer;
