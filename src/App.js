import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import List from './list';
import Contact from './contact';
import Cart from './cart';
import Home from './home';
import Payment from './payment';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/list">
          <List />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/cart/payment">
          <Payment />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
