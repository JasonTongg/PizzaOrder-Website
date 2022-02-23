import React, { useState } from 'react';
import Navbar from '../Navbar(back)';
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP
} from './HeroElements';

const ListHero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Tasty Pizza</HeroH1>
          <HeroP>Free delivery  |  Ready in 60 seconds</HeroP>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default ListHero;
