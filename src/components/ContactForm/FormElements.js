import styled from 'styled-components';
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