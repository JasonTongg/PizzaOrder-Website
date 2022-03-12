import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const BodyContainer = styled.body`
    background: black;
    padding: 4rem 8rem;
    min-height: calc(100vh - 329px);

    @media only screen and (max-width: 1000px){
        padding: 4rem 6rem;
    }

    @media only screen and (max-width: 790px){
        padding: 4rem 4rem;
    }

    @media only screen and (max-width: 720px){
        padding: 4rem 2rem;
    }
`;

export const BodyHeader = styled.h1`
    font-weight: 100;
    color: white;
    margin-bottom: 1.5rem;
`;

export const TableHeader = styled.div`
    padding: .8rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 12px;
    min-width: 650px;
    color: #4a4d55;
`;

export const HeaderItem = styled.p`
    font-size: 1.3rem;
    width: 220px;
    text-align: center;
    color: #999999;

    @media only screen and (max-width: 1000px){
        font-size: 1rem;
    }
`;

export const HeaderItems = styled.p`
    font-size: 1.3rem;
    width: 220px;
    text-align: center;
    color: white;

    @media only screen and (max-width: 1000px){
        font-size: 1rem;
    }
`;

export const TableItemContainer = styled.div`
    max-height: 600px;
    overflow: auto;
    background: #212121;
    border-radius: 30px;
    padding: 1rem 0;

    ::-webkit-scrollbar {
        display: none;
    }
`;