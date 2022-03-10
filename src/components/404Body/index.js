import {Illus, BodyContainer, Left, Right, TextHeader, TextP, Span, Btn, IllusContainer, IllusHeader} from './ErrorElements';
import React from 'react';
import IllusImage from '../../images/404.png';

const err = () => {
  return (
    <BodyContainer>
      <Left></Left>
      <Right>
        <IllusContainer>
          <Illus src={IllusImage}></Illus>
          <IllusHeader>Error 404</IllusHeader>
        </IllusContainer>
        <TextHeader>Oops,<br></br> <Span>nothing</Span> here...</TextHeader>
        <TextP>Uh oh, we can't seem to find the page you're looking for. <br/> Try going back to previous page.</TextP>
        <Btn to="/">Go back</Btn>
      </Right>
    </BodyContainer>
  );
};

export default err;
