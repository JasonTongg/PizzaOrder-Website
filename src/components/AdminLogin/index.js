import {BigContainer, Left, Right, LeftHeader, LeftPizzaria, PizzaP, PizzaIcon, Label, Input, InputContainer, LoginButton, BackButton, LeftText, BackButtonContainer, LoginStatus, LoginStatusContainer} from './AdminElements';
import React from 'react';
import {useHistory} from 'react-router-dom';

const AdminLogin = () => {
  const history = useHistory();

  return (
    <BigContainer>
      <Left>
        <LeftText>
          <LeftPizzaria>
            <PizzaP>Pizzaria</PizzaP>
            <PizzaIcon></PizzaIcon>
          </LeftPizzaria>
          <LeftHeader>LOGIN AS ADMIN</LeftHeader>
        </LeftText>
        <BackButtonContainer>
          <BackButton to="/">Back to Homepage</BackButton>
        </BackButtonContainer>
      </Left>
      <Right onSubmit={(e) => {
        e.preventDefault();
        if(document.querySelector('#username').value === "Admin"){
          if(document.querySelector('#password').value === "Admin123"){
            history.push("/admin");
          }
          else{
            document.querySelector('.status').innerHTML = "Password Wrong";
          }
        }
        else{
          if(document.querySelector('#password').value === "Admin123"){
            document.querySelector('.status').innerHTML = "Username Wrong";
          }
          else{
            document.querySelector('.status').innerHTML = "Username & Password Wrong";
          }
        }
        document.querySelector('.statusContainer').style.visibility = "visible";
        document.querySelector('.statusContainer').style.transform = "translatey(0)";
      }}>
        <InputContainer>
          <Label for="username">Username</Label>
          <Input type="text" id='username'></Input>
        </InputContainer>
        <InputContainer>
          <Label for="password">Password</Label>
          <Input type="password" id='password'></Input>
        </InputContainer>
        <LoginButton>Login</LoginButton>
        <LoginStatusContainer className='statusContainer'>
          <LoginStatus className='status'></LoginStatus>
        </LoginStatusContainer>
      </Right>
    </BigContainer>
  );
};

export default AdminLogin;
