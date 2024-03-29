import styled from 'styled-components';
import {FaPizzaSlice} from 'react-icons/fa';
import bg from '../../images/loginbg.jpeg';

export const BigContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    @media only screen and (max-width: 800px){
        grid-template-columns: 1fr;
        background: linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.5)) ,url(${bg});
        background-size: cover;
        background-position: center;
        grid-template-rows: 350px 300px;
    }
`;

export const Left = styled.div`
    height: 100%;
    width: 100%;
    background: linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.5)) ,url(${bg});
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-size: cover;
    background-position: center;

    @media only screen and (max-width: 800px){
        background: none;
    }
`;

export const LeftText = styled.div`
    @media only screen and (max-width: 255px){
        margin-top: 4rem;
    }
`;

export const LeftHeader = styled.h1`
    font-size: 4rem;
    color: white;
    text-align: center;
    line-height: 2.7rem;

    @media only screen and (max-width: 1250px){
        font-size: 3rem;
    }

    @media only screen and (max-width: 900px){
        font-size: 2.5rem;
    }

    @media only screen and (max-width: 500px){
        font-size: 2rem;
    }
`;

export const LeftPizzaria = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const PizzaP = styled.p`
    font-size: 3rem;
    color: white;

    @media only screen and (max-width: 1250px){
        font-size: 2.5rem;
    }

    @media only screen and (max-width: 900px){
        font-size: 2rem;
    }

    @media only screen and (max-width: 500px){
        font-size: 1.5rem;
    }
`;

export const PizzaIcon = styled(FaPizzaSlice)`
    font-size: 2rem;
    margin-left: .8rem;
    color: white;
`;

export const BackButtonContainer = styled.div`
    background: white;
    border-radius: 15px;
    padding: .5rem 1rem;
    position: absolute;
    top: 3rem;
    left: 5rem;
    z-index: 3;

    &:hover{
        box-shadow: .02rem .1rem 1rem white;
        transform: translatey(-5px);
        transition: .2s linear;
    }

    &:active{
        box-shadow: .005rem .05rem .5rem white;
        transform: translatey(-3px);
        transition: .2s linear;
    }

    @media only screen and (max-width: 800px){
        left: 50%;
        transform: translatex(-50%);
    }
`;

export const Right = styled.form`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    background: linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.5)) ,rgba(2,18,18,255);

    @media only screen and (max-width: 800px){
        background: none;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    margin: 0 auto;
    width: 48%;
    margin-bottom: .8rem;

    &:last-child{
        margin-top: 1.5rem;
    }

    @media only screen and (max-width: 1250px){
        width: 58%;
    }

    @media only screen and (max-width: 900px){
        width: 68%;
    }
`;

export const Label = styled.label`
    margin-bottom: .5rem;
    color: white;
`;

export const Input = styled.input`
    border: 2px solid rgba(255,255,255,.2);
    outline: none;
    padding: .5rem;
    font-size: 1rem;
    justify-self: start;
    border-radius: 10px;
    width: 100%;
    background: none;
    color: white;

    &:hover{
        border: 2px solid #cc4d02;
        transition: .2s ease-in;
    }

    &:focus{
        border: 2px solid rgb(154,76,70);
        transition: .05s ease-in;
    }
`;

export const LoginStatus = styled.p`
    font-size: 1rem;
    text-align: center;
    color: black;
    font-weight: bold;
`;

export const LoginStatusContainer = styled.div`
    background: white;
    border-radius: 15px;
    padding: .5rem 1rem;
    margin: 0 auto;
    margin-top: 20px;
    visibility: hidden;
    transform: translatey(10px);
    transition: .3s linear;
`;