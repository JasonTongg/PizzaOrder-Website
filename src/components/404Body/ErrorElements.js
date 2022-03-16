import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import bg from '../../images/404BG.jpg';

export const BodyContainer = styled.body`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    background: linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${bg});
    background-size: cover;
    background-position: right center;

    @media only screen and (max-width: 1250px){
        grid-template-columns: 1fr 1.7fr;
    }

    @media only screen and (max-width: 1000px){
        grid-template-columns: 1fr 2.5fr;
    }

    @media only screen and (max-width: 900px){
        grid-template-columns: 1fr;
    }
`;

export const TextHeader = styled.h1`
    font-size: 6rem;
    font-weight: 100;
    line-height: 100px;
    color: white;

    @media only screen and (max-width: 900px){
        text-align: center;
        padding: 0 1rem;
        font-size: 5rem;
    }

    @media only screen and (max-width: 550px){
        font-size: 4rem;
        line-height: 70px;
    }

    @media only screen and (max-width: 450px){
        font-size: 3rem;
        line-height: 60px;
    }
`;

export const TextP = styled.p`
    margin-top: 1.5rem;
    color: white;

    @media only screen and (max-width: 900px){
        text-align: center;
    }
    @media only screen and (max-width: 450px){
        font-size: .8rem;
    }
`;

export const Span = styled.span`
    color: #c06b0e;
`;

export const Left = styled.div`
    @media only screen and (max-width: 900px){
        display: none;
    }
`;

export const Illus = styled.img`
    width: 50%;
`;

export const Right = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    margin: 0 auto;

    @media only screen and (max-width: 900px){
        align-items: center;
    }
`;

export const IllusContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
`;

export const IllusHeader = styled.h1`
    // font-family: 'Fredoka';
    font-size: 2rem;
    color: white;
    font-weight: 100;
`;