import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo, productDataThree} from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';

function home() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Choose Your Favorite Pizza' data={productData} />
      <Feature />
      <Products heading='Choose Your Fancy Drink' data={productDataTwo} />
      <Products heading='Best Sweets for You' data={productDataThree} />
      <Footer />
    </Router>
  );
}

export default home;
