import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const HeroBtn = styled.button`
    font-size: 1.4rem;
    padding: .2rem 1.5rem;
    border: none;
    border-bottom: 1px solid white;
    color: #fff;
    transition: 0.2s ease-out;
    background: none;
    text-align: center;
    margin-bottom: 1rem;

    &:hover {
        background: #cc4d02;
        transition: 0.2s ease-out;
        cursor: pointer;
        border-bottom: 1px solid #cc4d02;
        transform: translateX(.2rem);
    }
`;

export const Btn = styled(Link)`
    background: white;
    color: black;
    padding: .5rem 2rem;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    border-radius: 5%;
    font-weight: bold;
    margin-top: 1.5rem;
    text-decoration: none;
    display: block;

    &:hover{
        background: #cc4d02;
        color: white;
    }
`;

export const BtnV2 = styled.button`
    background: white;
    color: black;
    padding: .5rem 2rem;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    border-radius: 5%;
    font-weight: bold;
    margin-top: 1.5rem;
    text-decoration: none;
    display: block;
    margin-left: 1.5rem;

    &:hover{
        background: #cc4d02;
        color: white;
    }

    @media only screen and (max-width: 680px){
        margin-left: 0;
    }
`;

export const HeroBtnLink = styled(Link)`
    font-size: 1.4rem;
    padding: .6rem 1.5rem;
    border: none;
    border-bottom: 1px solid white;
    color: #fff;
    transition: 0.2s ease-out;
    background: none;
    text-align: center;
    margin-bottom: 1rem;
    font-weight: 100;
    text-decoration: none;

    &:hover {
        background: #cc4d02;
        transition: 0.2s ease-out;
        cursor: pointer;
        border-bottom: 1px solid #cc4d02;
        transform: translateX(.2rem);
    }
`;

export const BtnMore = styled(Link)`
    font-size: 1.4rem;
    padding: .2rem 1.5rem;
    border: none;
    color: #000;
    transition: 0.2s ease-out;
    background: white;
    text-align: center;
    cursor: pointer;
    border-radius: 20px;
    margin-top: 20px;
    text-decoration: none;

    &:hover {
        background: #cc4d02;
        transition: 0.2s ease-out;
        color: white;
    }
`;

export const ShadowBtn = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    background: linear-gradient(to right, #cc4d02, brown, rgb(154,76,70));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

export const ShadowBtnBlack = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    color: black;
    text-align: center;
`;

export const ShadowBtnBold = styled.button`
    width: 48%;
    border: none;
    border-radius: 10px;
    color: black;
    background: white;
    font-size: 1.2rem;
    padding: .5rem;
    margin: 0 auto;
    margin-top: .2rem;
    cursor: pointer;
    font-weight: bold;

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

    @media only screen and (max-width: 1250px){
        width: 58%;
    }

    @media only screen and (max-width: 900px){
        width: 68%;
    }
`;

export const BlackWhiteButton = styled.input`
    padding: .5rem 1rem;
    font-size: 1.2rem;
    border-radius: 30px;
    background: none;
    color: white;
    border: 2px solid rgba(255,255,255,.1);
    outline: none;
    width: 100%;
    cursor: pointer;

    &:hover{
        background: white;
        color: black;
    }
`;

export const BtnDelete = styled.button`
    width: 45%; 
    padding: .8rem;
    background: rgb(242, 75, 75);
    border: none;
    border-radius: 15px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    text-align: center;

    &:hover{
        transition: ease-in;
        transform: translatey(-5px);
        box-shadow: .1rem .3rem 1rem rgba(154,76,70,.9);
    }

    &:active{
        transition: ease-in;
        transform: translatey(-3px);
        box-shadow: 0rem .1rem 1rem rgba(154,76,70,.9);
    }
`;

export const BtnDeleteSmall = styled.button`
    width: 25%; 
    padding: .8rem;
    background: rgb(242, 75, 75);
    border: none;
    border-radius: 15px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    text-align: center;

    &:hover{
        transition: ease-in;
        transform: translatey(-5px);
        box-shadow: .1rem .3rem 1rem rgba(154,76,70,.9);
    }

    &:active{
        transition: ease-in;
        transform: translatey(-3px);
        box-shadow: 0rem .1rem 1rem rgba(154,76,70,.9);
    }

    @media only screen and (Max-width: 350px){
        padding: .5rem;
        font-weight: 100;
    }
`;

export const BtnBrown = styled(Link)`
    background: #c06b0e;
    border-radius: 15px;
    border: none;
    padding: .5rem 1rem;
    font-size: 1.2rem;
    color: white;
    text-decoration: none;
    margin-top: 1.5rem;
`;