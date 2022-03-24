import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice, FaListAlt } from 'react-icons/fa';

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  font-weight: 700;
  width: 100vw;
  position: sticky;
  top: 0;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  font-weight: 100;

  @media screen and (max-width: 900px) {
    font-size: 18px;
  }

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }

  @media screen and (max-width: 360px) {
    font-size: 14px;
  }

  &:hover {
    transition: 0.2s ease-out;
    color: #ff680f;
  }
`;

export const NavIcon = styled.div`
  display: block;
  cursor: pointer;
  color: #fff;
  width: 9.375rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-weight: 100;
  font-size: 20px;
  transition: 0.2s ease-out;
  margin: 0 1rem;
  margin-top: 1rem;

  @media screen and (max-width: 900px) {
    width: 8rem;
  }

  @media screen and (max-width: 600px) {
    width: 7rem;
  }

  @media screen and (max-width: 360px) {
    width: 6rem;
  }

  @media screen and (max-width: 440px) {
    margin: .5rem 0;
  }

  &:hover{
    transition: 0.2s ease-out;
    color: #ff680f;
  }
`;

export const NavIcons = styled.div`
  display: block;
  cursor: pointer;
  color: #fff;
  width: 9.375rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-weight: 100;
  font-size: 20px;
  transition: 0.2s ease-out;
  margin: 0 2rem;
  margin-top: 1rem;

  @media screen and (max-width: 900px) {
    width: 8rem;
  }

  @media screen and (max-width: 600px) {
    width: 7rem;
  }

  @media screen and (max-width: 360px) {
    width: 6rem;
  }

  &:hover{
    transition: 0.2s ease-out;
    color: #ff680f;
  }
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 15rem;
  margin-top: 3rem;
  margin-left: 3rem;
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 20px;
  margin-left: .7rem;

  @media screen and (max-width: 900px) {
    font-size: 18px;
  }

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }

  @media screen and (max-width: 540px) {
    display: none;
  }
`;

export const Menu = styled(FaListAlt)`
  font-size: 20px;
  margin-left: .7rem;

  @media screen and (max-width: 900px) {
    font-size: 18px;
  }

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }

  @media screen and (max-width: 360px) {
    font-size: 14px;
  }
`;