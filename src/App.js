import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import ProductsList from './components/ListProduct';
import { productData, productDataTwo, productDataThree} from './components/Products/data';
import { productDataList, productDataTwoList, productDataThreeList} from './components/ListProduct/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import ListHero from './components/listHero';
import ContactHero from './components/ContactHero';
import CartHero from './components/CartHero';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/list">
          <GlobalStyle />
          <ListHero />
          <ProductsList heading='Pizzas' data={productDataList} />
          <ProductsList heading='Drinks' data={productDataTwoList} />
          <ProductsList heading='Sweets' data={productDataThreeList} />
          <Footer />
        </Route>
        <Route path="/contact">
          <GlobalStyle />
          <ContactHero />
          
          <Footer />
        </Route>
        <Route path="/cart">
          <GlobalStyle />
          <CartHero />
          
          <Footer />
        </Route>
        <Route path="/cart/payment">
          <GlobalStyle />
          <CartHero />
          
          <Footer />
        </Route>
        <Route exact path="/">
          <GlobalStyle />
          <Hero />
          <Products heading='Choose Your Favorite Pizza' data={productData} />
          <Feature />
          <Products heading='Choose Your Fancy Drink' data={productDataTwo} />
          <Products heading='Best Sweets for You' data={productDataThree} />
          <Footer />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
