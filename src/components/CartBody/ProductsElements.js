import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai';

export const ProductsContainer = styled.div`
  min-height: 100vh;
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
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  padding: 5rem;

  @media only screen and (max-width: 700px){
    padding: 3rem;
  }
`;

export const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  display: flex;
  align-items: center;
  margin-block: 5rem;

  @media only screen and (max-width: 1070px){
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px #fdc500;
`;

export const ProductsHeading = styled.h1`
  font-size: 2rem;
  text-align: center;

  @media only screen and (max-width: 700px){
    font-size: 1.8rem;
  }
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 3rem;

  @media only screen and (max-width: 700px){
    font-size: 2.2rem;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-left: 5rem;
  text-align: center;

  @media only screen and (max-width: 1070px){
    padding: 5rem 0 0 0;
    align-items: center;
  }
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: 100;
`;

export const ProductQty = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PlusIcon = styled(AiOutlinePlusCircle)`
  font-size: 3rem;
  margin-right: 3rem;
  cursor: pointer;
`;

export const MinIcon = styled(AiOutlineMinusCircle)`
  font-size: 3rem;
  margin-left: 3rem;
  cursor: pointer;
`;

export const QtyCount = styled.input`
  font-size: 3rem;
  border: none;
  background: #150f0f;
  color: white;
  width: 30px;
  outline: none;

  &::-webkit-outer-spin-button, &::-webkit-inner-spin-button{
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
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

export const Btn = styled(Link)`
  background: white;
  color: black;
  padding: .5rem 2rem;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  border-radius: 5%;
  font-weight: bold;
  margin-top: 1.5rem;
  text-decoration: none;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  @media only screen and (max-width: 700px){
    align-items: center;
  }
`;


