import React from 'react';
import { Nav, NavLink, NavIcon, Bars , NavItem, Cart, Phone, Menu} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavItem>
          <NavIcon onClick={""}>
            <NavLink to='/'>Pizzaria</NavLink>
            <Bars />
          </NavIcon>  
          <NavIcon onClick={""}>
          <NavLink to='/'>Contact Us</NavLink>
            <Phone />
          </NavIcon> 
          <NavIcon onClick={""}>
          <NavLink to='/'>Cart</NavLink>
            <Cart />
          </NavIcon> 
        </NavItem>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Menu />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
