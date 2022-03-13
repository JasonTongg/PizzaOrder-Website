import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { keyframes } from "styled-components";
import bg from '../../images/pop.jpg';

export const ProductsContainer = styled.div`
  padding: 5rem 0;
  position: relative;
  background: rgb(21,15,15);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: Start;
  overflow: auto;
  max-width: 80vw;
  margin: 0 auto;
  border-radius: 15px;
  border: 2px solid rgba(255,255,255,.2);

  ::-webkit-scrollbar{
    background: none;
  }

  ::-webkit-scrollbar-track {
    background: rgb(21,15,15); 
    border: 2px solid rgba(255,255,255,.5);
    border-radius: 15px;
    outline: none;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #cc4d02; 
    border-radius: 15px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #cc6d35; 
  }
`;

let example = keyframes`
  from {
    right: -10rem;
    bottom: 1rem;
    opacity: 1;
  }
  to {
    right: 1rem;
    bottom: 1rem;
    opacity: 1;
  }
`;

export const Popup = styled.div`
  position: fixed;
  right: -13rem;
  bottom: 1rem;
  opacity: 1;
  height: 120px;
  width: 250px;
  background: linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.5)) ,url(${bg});
  background-size: cover;
  background-posisition: center;
  // background: #cc4d02;
  animation-name: ${example};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  display: none;
  border-radius: 15px;
  box-shadow: 0rem 0rem .7rem white;
  align-items: center;
  justify-content: center;
  padding: .5rem;
  text-align: center;
`;

export const TextPop = styled.p`
  font-size: 1.2rem;
`;

export const ProductCard = styled.form`
  width: 300px;
  margin-inline: 1.5rem;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #cc4d02;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  align-self: center;
`;

export const ProductMore = styled(Link)`
  font-size: 1.4rem;
  padding: .2rem 1.5rem;
  border: none;
  color: #000;
  transition: 0.2s ease-out;
  background: white;
  text-align: center;
  cursor: pointer;
  border-radius: 20px;
  margin-top: 20px;
  text-decoration: none;

  &:hover {
    background: #cc4d02;
    transition: 0.2s ease-out;
    color: white;
  }
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
