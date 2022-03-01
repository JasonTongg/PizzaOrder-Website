import styled from 'styled-components';
import ImgBg from '../../images/contact-header.png';

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
    url(${ImgBg});
  height: 70vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100% - 80px);
  display: flex;
  justify-content: center;
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100vw;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 711px) {
    padding: 0;
  }

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroContentItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  line-height: 1;
  width: 60%;

  @media only screen and (max-width: 1000px){
    flex-direction: column;
    justify-content: center;
  }

  @media only screen and (max-width: 600px){
    width: 80%;
  }
`;

export const HeroH1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  padding: .5rem 1.5rem;
  letter-spacing: 3px;
  font-weight: 100;

  @media only screen and (max-width: 600px){
    font-size: 2rem;
  }
`;

export const HeroH2 = styled.h2`
  font-size: 2rem;
  letter-spacing: 3px;
  font-weight: 100;
  width: 50%;
  padding: 2rem .2rem;
  text-align: left;
  margin-right: 1rem;

  @media only screen and (max-width: 1000px){
    text-align: center;
    width: 100%;
  }

  @media only screen and (max-width: 600px){
    font-size: 1.5rem;
  }
`;

export const HeroP = styled.p`
  font-size: 1.3rem;
  font-weight: normal;
  width: 50%;
  text-align: right;
  margin-left: 1rem;

  @media only screen and (max-width: 1000px){
    text-align: center;
    width: 100%;
  }

  @media only screen and (max-width: 600px){
    font-size: 1rem;
  }
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: .2rem 1.5rem;
  border: none;
  border-bottom: 1px solid white;
  color: #fff;
  transition: 0.2s ease-out;
  background: none;
  text-align: center;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
    border-bottom: 1px solid black;
    transform: translateX(.2rem);
  }
`;
