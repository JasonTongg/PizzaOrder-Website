import React from 'react';
import { FeatureContainer } from './FeatureElements';
import { HeroBtn } from '../Hero/HeroElements'

const Feature = () => {
  return (
    <FeatureContainer>
      <p>California Pizza</p>
      <h1>Pizza of the Day</h1>
      <HeroBtn>Order Now</HeroBtn>
    </FeatureContainer>
  );
};

export default Feature;
