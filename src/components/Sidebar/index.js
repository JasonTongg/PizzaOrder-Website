import React from 'react';
import {
  SidebarContainer, Icon, CloseIcon, SidebarMenu, SideBtnWrap, SidebarLinkContainer
} from './SidebarElements';

import {ShadowBtn} from '../SmallElement/Button'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLinkContainer>
          <ShadowBtn to='/list'>Full Menu</ShadowBtn>
        </SidebarLinkContainer>
        <SidebarLinkContainer>
          <ShadowBtn to='/cart'>Food Cart</ShadowBtn>
        </SidebarLinkContainer>
        <SidebarLinkContainer>
          <ShadowBtn to='/history'>Order History</ShadowBtn>
        </SidebarLinkContainer>
        <SidebarLinkContainer>
          <ShadowBtn to='/login'>Login as Admin</ShadowBtn>
        </SidebarLinkContainer>
      </SidebarMenu>
      <SideBtnWrap>
        <ShadowBtn to='/list'>Order Now</ShadowBtn>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
