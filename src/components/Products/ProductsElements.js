import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { keyframes } from "styled-components";
import bg from '../../images/pop.jpg';

export const ProductsContainer = styled.div`
  /* width: 100vw; */
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
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
  animation-duration: 1s;
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
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
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