import { Button, Carousel, Container } from 'react-bootstrap';
import './slide.css';

function Slide() {
  return (
    <div>
      <br />
      <br />

      <Carousel id="home">
        <Carousel.Item interval={2000} className="c-item">
          <img
            src="./src/img/loukas-1.jpg"
            alt="First slide"
            className="c-img"
          />
          <Carousel.Caption>
            <Button variant="success">Order Now</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000} className="c-item">
          <img
            src="./src/img/loukas-2.jpg"
            alt="First slide"
            className="c-img"
          />
          <Carousel.Caption>
            <Button variant="success">Order Now</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000} className="c-item">
          <img
            src="./src/img/loukas-3.jpg"
            alt="First slide"
            className="c-img "
          />
          <Carousel.Caption>
            <Button variant="success">Order Now</Button>{' '}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slide;
