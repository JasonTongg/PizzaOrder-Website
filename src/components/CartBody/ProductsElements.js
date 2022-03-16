import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const ProductsContainer = styled.div`
  min-height: calc(100vh - 329px);
  padding: 5rem;
  background: #150f0f;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  @media only screen and (max-width: 1070px){
    align-items: center;
  }
`;

export const ProductWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 350px));
  gap: 1.5rem;
  padding: 1.5rem;
  justify-content: center;

  @media only screen and (max-width: 500px){
    grid-template-columns: repeat(auto-fit, minmax(280px, 350px));
  }
`;

export const ProductCard = styled.div`
  background: white;
  color: black;
  width: 100%;
  text-align: center;
  height: 250px;
  border-radius: 15px;
  position: relative;
`;

export const ProductTitle = styled.h2`
  background: linear-gradient(to right, #cc4d02, brown, rgb(154,76,70));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 1rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  jusrify-content: center;
  align-items: center;
  height: calc(100% - 100px);
`;

export const ProductPrice = styled.p`
  font-size: 1.3rem;
`;

export const ProductQty = styled.p`
  background: linear-gradient(to right, #cc4d02, brown, rgb(154,76,70));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ProductQtyContainer = styled.div`
  background: white;
  border-radius: 100px;
  border: 2px brown solid;
  width: 20%;
  margin: 0 auto;
  position: absolute;
  z-index: 2;
  top: 10%;
  left: 50%;
  transform: translatex(-50%);
`;

export const ProductLinear = styled.div`
  background: linear-gradient(to right, #cc4d02, brown, rgb(154,76,70));
  height: 100px;
  clip-path: ellipse(50% 100% at 50% 0%);
  border-radius: 15px;
`;

export const ProductButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  border-radius: 15px;
  margin-top: 1rem;
`;

export const ProductsHeading = styled.h1`
  font-size: 2rem;
  text-align: center;

  @media only screen and (max-width: 700px){
    font-size: 1.8rem;
  }
`;

export const Line = styled.hr`
  height: 3px;
  width: 100%;
  background: white;
`;

export const TextHeader = styled.h1`
  font-size: 3rem;
  margin-top: 3rem;
`;

export const TextP = styled.p`
  font-size: 1.8rem;
`;

export const InfoContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  @media only screen and (max-width: 1070px){
    align-items: center;
  }
`;