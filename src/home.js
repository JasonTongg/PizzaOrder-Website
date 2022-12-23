import React from 'react';
import {GlobalStyle} from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import Feature from './components/Feature';
import Footer from './components/Footer';
import {Container, ContainerBlack, OverflowHidden} from './index';

const contact = () => {
  return (
    <OverflowHidden>
      <GlobalStyle />
      <Hero />
      <ContainerBlack>
        <Products
          heading="Choose Your Favorite Pizza"
          data1={`${0}`}
          data2={`${2}`}
        />
      </ContainerBlack>
      <Feature />
      <Container>
        <Products
          heading="Choose Your Fancy Drink"
          data1={`${9}`}
          data2={`${11}`}
        />
        <Products
          heading="Best Sweets for You"
          data1={`${12}`}
          data2={`${14}`}
        />
      </Container>
      <Footer />
    </OverflowHidden>
  );
};

export default contact;
