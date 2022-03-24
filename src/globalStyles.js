import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
    font-family: 'Kanit', sans-serif;

    ::-webkit-scrollbar{
      background: black;
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
  }
`;
