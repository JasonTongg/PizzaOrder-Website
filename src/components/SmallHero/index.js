import React, { useState } from 'react';
import Navbar from '../Navbar(back)';
import Sidebar from '../Sidebar';
import {
  HeroContainer, HeroContent, HeroItems, HeroH1
} from './HeroElements';

const ListHero = ({Header}) => {
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
          <HeroH1>{Header}</HeroH1>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default ListHero;
