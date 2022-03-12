import react from "react"; 
import {Carousel} from 'react-bootstrap';
import './carousel.css'

const Carousel1 = () => {
return (
<div className="carou-div">
<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="/image-carousel/img01.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Premiére composition</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="/image-carousel/img02.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Deuxiéme composition</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/image-carousel/img03.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Troisiéme composiition</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

</div>
)}

export default Carousel1