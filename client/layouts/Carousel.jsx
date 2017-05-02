import React from 'react';
import ReactBootstrap from 'react-bootstrap';

const CarouselMain = ReactBootstrap.Carousel;
const CarouselItem = ReactBootstrap.Carousel.Item;
const CarouselCaption = ReactBootstrap.Carousel.Caption;

const Carousel = React.createClass({
  // TODO: center image thru css overide or function here

  render() {
    return (

      <CarouselMain>
        <CarouselItem >
            <img width={900} height={500} alt="900x500" src="https://upload.wikimedia.org/wikipedia/commons/9/90/Dscn3308-rg-e-from-w_900x500.jpg"/>
            <CarouselCaption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </CarouselCaption>
          </CarouselItem>
          <CarouselItem>
            <img width={900} height={500} alt="900x500" src="https://upload.wikimedia.org/wikipedia/commons/9/90/Dscn3308-rg-e-from-w_900x500.jpg"/>
            <CarouselCaption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </CarouselCaption>
          </CarouselItem>
        <CarouselItem>
          <img width={900} height={500} alt="900x500" src="https://upload.wikimedia.org/wikipedia/commons/9/90/Dscn3308-rg-e-from-w_900x500.jpg"/>
          <CarouselCaption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </CarouselCaption>
        </CarouselItem>
      </CarouselMain>

    );
  },

});

export default Carousel;
