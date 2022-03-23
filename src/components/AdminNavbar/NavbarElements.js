import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice} from 'react-icons/fa';
import { AiFillMessage} from 'react-icons/ai';
import {HiOutlineLogout} from 'react-icons/hi'

export const Nav = styled.nav`
  background: #1d202d;
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
`;

export const NavIcon = styled.div`
  display: block;
  cursor: pointer;
  color: #fff;
  width: 12rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-weight: 100;
  font-size: 20px;
  transition: 0.2s ease-out;
  margin: 0 1rem;

  @media screen and (max-width: 900px) {
    width: 8rem;
  }

  @media screen and (max-width: 600px) {
    width: 7rem;
    margin: 0 .7rem;
  }

  @media screen and (max-width: 360px) {
    width: 6rem;
  }

  @media screen and (max-width: 440px) {
    margin: .5rem 0;
  }
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 34.375rem;

  @media screen and (max-width: 900px) {
    width: 30rem;
  }

  @media screen and (max-width: 600px) {
    width: 25rem;
  }

  @media screen and (max-width: 540px) {
    width: 19rem;
  }

  @media screen and (max-width: 440px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1rem;
  }
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

export const Phone = styled(AiFillMessage)`
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

export const Logout = styled(HiOutlineLogout)`
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