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

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

reportWebVitals();

