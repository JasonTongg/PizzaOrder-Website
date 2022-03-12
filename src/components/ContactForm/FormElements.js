import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { keyframes } from "styled-components";
import bg from '../../images/pop.jpg';

export const FormBody = styled.body`
  background: #150f0f;
`;

export const Form = styled.form`
  width: 60%;
  margin-inline: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  padding-block: 3rem;

  @media only screen and (max-width: 650px){
    width: 80%;
  }
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  &:not(:last-child){
    margin-bottom: 20px;
  }
`;

export const FormLabel = styled.label`
  font-size: 1.5rem;
`;

export const FormInput = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  background: #150f0f;
  color: white;
  border: 1px solid white;
  padding: 10px;
  font-size: 1.2rem;
  margin-top: 10px;
  border-radius: 5px;
`;

export const FormTextArea = styled.textarea`
  outline: none;
  background: #150f0f;
  color: white;
  border: 1px solid white;
  font-size: 1.2rem;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
`;

export const FormButton = styled.button`
  font-weight: 600;
  padding: 5px 30px;
  font-size: 1rem;
  align-self: flex-start;
  border-radius: 7px;
  cursor: pointer;
  background: white;
  color: black;
  text-decoration: none;
`;

let example = keyframes`
  from {
    right: -10rem;
    bottom: 1rem;
    opacity: 1;
  }
  to {
    right: 1rem;
    bottom: 1rem;
    opacity: 1;
  }
`;

export const Popup = styled.div`
  position: fixed;
  right: -13rem;
  bottom: 1rem;
  opacity: 1;
  height: 120px;
  width: 250px;
  background: linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.5)) ,url(${bg});
  background-size: cover;
  background-posisition: center;
  // background: #cc4d02;
  animation-name: ${example};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  display: none;
  border-radius: 15px;
  box-shadow: 0rem 0rem .7rem white;
  align-items: center;
  justify-content: center;
  padding: .5rem;
  text-align: center;
`;

export const TextPop = styled.p`
  font-size: 1.2rem;
`;