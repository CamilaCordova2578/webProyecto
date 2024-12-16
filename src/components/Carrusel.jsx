import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import Caimg1 from "../assets/img/imagen29.jpg"
import Caimg2 from "../assets/img/imagen30.jpg"
import Caimg3 from "../assets/img/imagen31.jpg"
import Caimg4 from "../assets/img/imagen32.jpg"
import Caimg5 from "../assets/img/imagen33.jpg"
import Caimg6 from "../assets/img/imagen34.jpg"
import Caimg7 from "../assets/img/imagen35.jpg"
import Caimg8 from "../assets/img/imagen36.jpg"
import Caimg9 from "../assets/img/imagen37.jpg"
import Caimg10 from "../assets/img/imagen38.png"
const items = [
  {
    src: Caimg1,
    altText: '',
    caption: '',
    key: 1,
  },
  {
    src: Caimg2,
    altText: '',
    caption: '',
    key: 2,
  },
  {
    src: Caimg3,
    altText: '',
    caption: '',
    key: 3,
  },
  {
    src: Caimg4,
    altText: '',
    caption: '',
    key: 4,
  },
  {
    src: Caimg5,
    altText: '',
    caption: '',
    key: 5,
  },
  {
    src: Caimg6,
    altText: '',
    caption: '',
    key: 6,
  },
  {
    src: Caimg7,
    altText: '',
    caption: '',
    key: 7,
  },
  {
    src: Caimg8,
    altText: '',
    caption: '',
    key: 8,
  },
  {
    src: Caimg9,
    altText: '',
    caption: '',
    key: 9,
  },
  {
    src: Caimg10,
    altText: '',
    caption: '',
    key: 10,
  },

];

function Example(args) {
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

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img style={{ height: '800px', margin: '0 auto' }} src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

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

export default Example;