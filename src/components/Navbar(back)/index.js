import React from 'react';
import { Nav, NavLink, NavIcon, Bars , NavItem, Menu, NavIcons} from './NavbarElements';

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
            <NavLink to='/'>Back to Home</NavLink>
          </NavIcon>
        </NavItem>
        <NavIcons onClick={toggle}>
          <p>Menu</p>
          <Menu />
        </NavIcons>
      </Nav>
    </>
  );
};

export default Navbar;
