import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components';
import Bg from './images/product-background.jpeg';

export const Container = styled.div`
  background-image: linear-gradient(to right, rgba(0,0,0,.8), rgba(0,0,0,.8)), url(${Bg});
  background-size: cover;
  background-position: center top;
`;

export const ContainerBlack = styled.div`
  background: #150f0f;
`;

export const OverflowHidden = styled.div`
  overflow-x: hidden;

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

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

reportWebVitals();

