import React, { useState } from 'react';
import Navbar from '../Navbar(back)';
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroH2,
  HeroContentItem,
  HeroLine
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
          <HeroH1>Contact Us</HeroH1>
          <HeroContentItem>
            <HeroH2>Your satisfaction is always our priority</HeroH2>
            <HeroLine />
            <HeroP>For further inquiries, please feel free to contact us using the form below. We will contact you as soon as possible.</HeroP>
          </HeroContentItem>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default ListHero;
