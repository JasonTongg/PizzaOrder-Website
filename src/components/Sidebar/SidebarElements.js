import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import {FaCartPlus} from 'react-icons/fa';

export const Cart = styled(FaCartPlus)`
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

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: linear-gradient(to right bottom, #cc4d02, brown, rgb(154,76,70));
  // background: black;
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: white;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`;

export const SidebarLinkContainer = styled.div`
  width: 70%;
  height: 70%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  margin: 0 auto 1rem auto;

  &:hover{
    box-shadow: .02rem .1rem 1rem white;
    transform: translatey(-5px);
    transition: .2s linear;
  }

  &:active{
      box-shadow: .005rem .05rem .5rem white;
      transform: translatey(-3px);
      transition: .2s linear;
  }
`;

export const SideBtnWrap = styled.div`
  width: 70%;
  height: 20%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  margin: 0 auto 1rem auto;

  &:hover{
    box-shadow: .02rem .1rem 1rem white;
    transform: translatey(-5px);
    transition: .2s linear;
  }

  &:active{
      box-shadow: .005rem .05rem .5rem white;
      transform: translatey(-3px);
      transition: .2s linear;
  }
`;
