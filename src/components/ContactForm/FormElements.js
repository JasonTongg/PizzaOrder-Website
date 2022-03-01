import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

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

export const FormPopUp = styled(Link)`
  position: fixed;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(to right, rgba(0,0,0,.7), rgba(0,0,0,.7));
  display: none;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
`;

export const FormPopUpItem = styled.div`
  width: 55%;
  height: 65%;
  background: white;
  box-shadow: .2rem .2rem 1rem white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FormPopUpImage = styled.img`
  height: 100%;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
`;

export const FormPopUpText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-right: 1.5rem;
`;

export const FormPopUpHeader = styled.h2`
  text-align: start;
  margin-bottom: 1rem;
`;

export const FormPopUpParagraph = styled.p`
  text-align: justify;
`;

export const PopUpIcon = styled(FaCheckCircle)`
  font-size: 6rem;
  margin-bottom: 1rem;
`;
