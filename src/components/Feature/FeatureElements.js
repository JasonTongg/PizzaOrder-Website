import styled from 'styled-components';
import FeaturePic from '../../images/featured3.png';

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${FeaturePic});
  height: 70vw;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #fff;
  text-align: center;
  padding: 0 5rem;

  @media only screen and (max-width: 640px){
    align-items: center;
  }

  @media only screen and (max-width: 400px){
    padding: 0 4rem;
  }

  @media only screen and (max-width: 370px){
    padding: 0 2.5rem;
  }

  h1 {
    font-size: 4rem;
    font-weight: 500;
    margin-bottom: 1rem;

    @media only screen and (max-width: 640px){
      font-size: 3rem;
    }

    @media only screen and (max-width: 500px){
      font-size: 2rem;
    }

    @media only screen and (max-width: 370px){
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 2rem;

    @media only screen and (max-width: 640px){
      font-size: 1.5rem;
    }

    @media only screen and (max-width: 500px){
      font-size: 1rem;
    }

    @media only screen and (max-width: 370px){
      font-size: .8rem;
    }
  }
`;
