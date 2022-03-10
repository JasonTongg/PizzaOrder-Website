import React from 'react';
import { Nav, NavLink, NavIcon, Bars , NavItem, Phone, Logout} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavItem>
          <NavIcon>
            <NavLink to='/admin'>Pizzaria Admin</NavLink>
            <Bars />
          </NavIcon>  
          <NavIcon>
            <NavLink to='/message'>Message</NavLink>
            <Phone />
          </NavIcon>  
        </NavItem>
        <NavIcon>
            <NavLink to='/'>Logout</NavLink>
            <Logout />
          </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
