import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarLinkContainer
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLinkContainer>
          <SidebarLink to='/list'>Full Menu</SidebarLink>
        </SidebarLinkContainer>
        <SidebarLinkContainer>
          <SidebarLink to='/cart'>Food Cart</SidebarLink>
        </SidebarLinkContainer>
        <SidebarLinkContainer>
          <SidebarLink to='/login'>Login as Admin</SidebarLink>
        </SidebarLinkContainer>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarLink to='/list'>Order Now</SidebarLink>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
