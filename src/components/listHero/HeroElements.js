import styled from 'styled-components';
import ImgBg from '../../images/list-header.png';

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

export const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 7vw, 3.5rem);
  margin-bottom: 1rem;
  box-shadow: 0 3px #ff680f;
  padding: .5rem 1.5rem;
  letter-spacing: 3px;
  font-weight: 100;
`;

export const HeroP = styled.p`
  font-size: clamp(1rem, 1.5vw, 2rem);
  margin-bottom: 2rem;
  font-weight: 100;
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
