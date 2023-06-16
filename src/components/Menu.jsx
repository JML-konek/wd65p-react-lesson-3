import { Container, Row } from 'react-bootstrap';
import pasta from './pasta';
import MenuCard from './MenuCard';

function Menu() {
  return (
    <Container className="mt-5">
      <br />
      <h1 className="text-center text-light" id="menu">
        MENU
      </h1>
      <br />
      <Row className="justify-content-center g-4">
        {pasta.map((pastaItem) => (
          <MenuCard
            key={pastaItem.id}
            title={pastaItem.title}
            price={pastaItem.price}
            image={pastaItem.image}
          />
        ))}
      </Row>
    </Container>
  );
}

export default Menu;
