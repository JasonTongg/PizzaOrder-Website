import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute
} from './SidebarElements';
import {HeroBtn} from '../Hero/HeroElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='list'>Full Menu</SidebarLink>
      </SidebarMenu>
      <HeroBtn>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </HeroBtn>
    </SidebarContainer>
  );
};

export default Sidebar;
