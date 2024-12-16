import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from 'reactstrap';

function CarruselCard({ items, ...args }) { 
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.key}
    >
      <Card style={{ width: '18rem', margin: '0 auto', textAlign: 'center' }}>
        <CardImg
          top
          style={{
            width: '100%',
            objectFit: 'cover', 
            borderRadius: '8px 8px 0 0',
            height: "450px" 
          }}
          src={item.image}
          alt={item.title}
        />
        <CardBody>
          <CardTitle tag="h5">{item.title}</CardTitle>
          <CardText>{item.text}</CardText>
          <Button style={{ backgroundColor: "rgb(97, 63, 32)",  marginBottom: "10px"}}
            href={item.enlaceBoton}
            target="_blank"  
          >{item.buttonText}</Button>
        </CardBody>
      </Card>
    </CarouselItem>
  ));

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default CarruselCard;
