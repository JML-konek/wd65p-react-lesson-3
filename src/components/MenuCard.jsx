import { Button, Card, Col, Container } from 'react-bootstrap';

function MenuCard(props) {
  return (
    <Col md="3">
      <Card>
        <Card.Img variant="top" src={props.image} style={{ height: '16rem' }} />
        <Card.Body className="text-center">
          <Card.Title>{props.title}</Card.Title>
          <Card.Title>{props.price}</Card.Title>
          <Button variant="success">Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default MenuCard;
