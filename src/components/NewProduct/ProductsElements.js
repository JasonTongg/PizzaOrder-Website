import styled from 'styled-components';

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

  ::-webkit-scrollbar-thumb {
    background: #cc4d02; 
    border-radius: 15px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #cc6d35; 
  }
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