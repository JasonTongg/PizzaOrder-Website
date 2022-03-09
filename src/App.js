import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import List from './list';
import Contact from './contact';
import Cart from './cart';
import Home from './home';
import Payment from './payment';
import AdminLogin from './AdminLogin';
import Err from './error';
import Admin from './Admin';
import { Redirect } from 'react-router-dom';

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
        <Route path="/payment">
          <Payment />
        </Route>
        <Route path="/login">
          <AdminLogin />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <Err />
          <Redirect to="/404"/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
