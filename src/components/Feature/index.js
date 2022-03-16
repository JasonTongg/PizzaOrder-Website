import React from 'react';
import { FeatureContainer } from './FeatureElements';
import { HeroBtnLink } from '../SmallElement/Button'

const Feature = () => {
  return (
    <FeatureContainer>
      <p>California Pizza</p>
      <h1>Pizza of the Day</h1>
      <HeroBtnLink to="/list">Order Now {`->`}</HeroBtnLink>
    </FeatureContainer>
  );
};

export default Feature;
