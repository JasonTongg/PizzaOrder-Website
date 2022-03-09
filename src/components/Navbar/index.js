import React from 'react';
import { Nav, NavLink, NavIcon, Bars , NavItem, Cart, Phone, Menu} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavItem>
          <NavIcon>
            <NavLink to='/'>Pizzaria</NavLink>
            <Bars />
          </NavIcon>  
          <NavIcon>
            <NavLink to='contact'>Contact Us</NavLink>
            <Phone />
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
