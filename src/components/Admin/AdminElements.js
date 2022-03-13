import React from 'react';
import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { keyframes } from "styled-components";
import bg from '../../images/pop.jpg';

export const BodyContainer = styled.body`
    background: #121421;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
`;

export const InnerContainer = styled.div`
    background: #1d202d;
    width: 90%;
    height: 80%;
    border-radius: 30px;
    padding: 3rem;
`;

export const ContainerHeader = styled.h1`
    color: white;
    align-self: start;
    margin-left: 4.5rem;
    margin-bottom: 1rem;
`;

export const InfoContainer = styled.div`
    height: 300px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;

    @media only screen and (max-width: 1370px){
        grid-template-columns: 1fr 1fr;
        height: 480px;
    }

    @media only screen and (max-width: 850px){
        height: 650px;
    }
`;

export const SmallInfoContainer = styled.div`
    background: #292c38;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;

    @media only screen and (max-width: 600px){
        flex-direction: column;
    }
`;

export const BigInfoContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 1.5rem;
    width: 100%;
    height: 100%;

    @media only screen and (max-width: 850px){
        grid-column: 1/-1;
    }
`;

export const CenterInfoContainer = styled.div`
    width: 100%;
    height: 100%;
    background: #292c38;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;

    @media only screen and (max-width: 1370px){
        grid-column: 1/ -1;
        grid-row: 1/ 2;
    }
`;

export const TextP = styled.p`
    font-size: 1.5rem;
    color: #676b78;
    margin-right: 1.5rem;

    @media only screen and (max-width: 970px){
        font-size: 1.2rem;
    }

    @media only screen and (max-width: 600px){
        font-size: 1rem;
        margin: 0;
    }
`;

export const TextP4 = styled.p`
    font-size: 1.5rem;
    color: #676b78;
    text-align: center;
    margin-block: 1rem;

    @media only screen and (max-width: 970px){
        font-size: 1.2rem;
    }

    @media only screen and (max-width: 600px){
        font-size: 1rem;
        margin: 0;
    }
`;

export const TextP2 = styled.p`
    font-size: 2rem;
    color: #676b78;

    @media only screen and (max-width: 970px){
        font-size: 1.5rem;
    }

    @media only screen and (max-width: 600px){
        font-size: 1rem;
    }
`;

export const TextP3 = styled.p`
    font-size: 2rem;
    color: white;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
`;

export const Persentage = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 970px){
        font-size: .8rem;
    }
`;

export const Dot = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #eec956;
    margin-right: .5rem;
`;

export const DotPurple = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #b658f5;
    margin-right: .5rem;
`;

export const DotRed = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #e47992;
    margin-right: .5rem;
`;

export const DotGreen = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #37be9a;
    margin-right: .5rem;
`;

export const DotBlue = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #6eb3d6;
    margin-right: 1rem;
`;

export const DotRedd = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: red;
    margin-right: 1rem;
`;

export const PersentageResult = styled.p`
    font-size: 2rem;
    color: white;

    @media only screen and (max-width: 970px){
        font-size: 1.5rem;
    }
    @media only screen and (max-width: 600px){
        font-size: 1rem;
    }
`;

export const BigText = styled.p`
    font-size: 6rem;
    line-height: 6.5rem;
    color: white;

    @media only screen and (max-width: 970px){
        font-size: 5rem;
        line-height: 5.5rem;
    }

    @media only screen and (max-width: 600px){
        font-size: 4rem;
        line-height: 4.5rem;
    }
`;

export const TableHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 1rem;
    padding-bottom: 1rem;
    min-width: 700px;
`;

export const TableHeaderItem = styled.p`
    color: #676b78;
    font-size: 1.7rem;
    width: 200px;
    text-align: center;
`;

export const TableRowItem= styled.p`
    color: white;
    font-size: 1.5rem;
    width: 250px;
    text-align: center;
`;

export const ProfitContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 1.5rem;
    padding: 0 0 1.5rem 0;

    @media only screen and (max-width: 600px){
        grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    }
`;

export const ProfitItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: #292c38;
    padding: .5rem;
    border-radius: 15px;

    @media only screen and (max-width: 600px){
        flex-direction: column;
    }
`;

export const TableOverflow = styled.div`
    max-height: 500px;
    min-width: 700px;
`;

export const TableContainer = styled.div`
    width: 90%;
    overflow: auto;
    border-radius: 30px;
    padding: 1.5rem;
    background: #1d202d;

    ::-webkit-scrollbar{
        display: none;
    }
`;

export const Container = styled.div`
    display: grid;
    margin-block: 4rem 2rem;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    width: 90%;

    @media only screen and (max-width: 1000px){
        grid-template-columns: 1fr;
    }
`;

export const ZeroContainer = styled.div`
    width: 100%;
    background: #1d202d;
    overflow: auto;
    border-radius: 30px;
    max-height: 380px;
    
    ::-webkit-scrollbar{
        display: none;
    }
`;

export const ZeroHeader = styled.div`
    width: 100%;
    height: 50px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: end;
    font-size: 1.5rem;
`;

export const ZeroTableHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 1rem;
    padding-bottom: 1rem;
`;

export const ZeroTable = styled.div`
    max-height: 500px;
    margin-top: 1rem;
`;

export const ZeroItem = styled.p`
    color: white;
    font-size: 1.5rem;
    text-align: center;
`;

export const ZeroItems = styled.p`
    color: #676b78;
    font-size: 1.7rem;
    width: 200px;
    text-align: center;
`;

export const AddUpdateContainer = styled.div`
    width: 100%;
    height: 100%;
    background: #1d202d;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 1.5rem;
    max-height: 380px;
`;

export const AddForm = styled.form`
    width: 100%;
    padding-inline: 1rem;
    background: #1d202d;
    overflow: auto;
    border-radius: 30px;
    max-height: 380px;
    
    ::-webkit-scrollbar{
        display: none;
    }
`;

export const AddFormItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin-bottom: 1rem;
    margin-top: 1rem;
`;

export const AddLabel = styled.label`
    margin-right: 1rem;
    color: white;
    font-size: 1.2rem;
    width: 120px;
    text-align: end;
`;

export const AddLabel1 = styled.label`
    margin-right: 1rem;
    color: white;
    font-size: 1.2rem;
    align-self: start;
    width: 100px;
    text-align: end;
`;

export const AddInput = styled.input`
    padding: .5rem 1rem;
    font-size: 1.2rem;
    border-radius: 30px;
    background: none;
    color: white;
    border: 2px solid rgba(255,255,255,.1);
    outline: none;
    width: 100%;

    &:hover{
        border: 2px solid rgba(255,255,255,.3);
    }

    &:focus{
        border: 2px solid rgba(255,255,255,.5);
    }

    &::-webkit-file-upload-button {
        background: #1d202d;
        color: white;
        outline: none;
        border: none;
        margin-right: 1rem;
    }
`;

export const AddButton = styled.input`
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

export const AddSelect = styled.select`
    width: 100%;
    background: none;
    color: white;
    border-radius: 30px;
    border: 2px solid rgba(255,255,255,.1);
    outline: none;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;

    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';
`;

export const AddOption = styled.option`
    background: #1d202d;
    color: white;

    &:focus, &:hover, &:active{
        background: white !important;
        color: black !important;
        outline: none;
    }
`;

export const AddTextArea = styled.textarea`
    padding: .5rem 1rem;
    font-size: 1.2rem;
    border-radius: 30px;
    background: none;
    color: white;
    border: 2px solid rgba(255,255,255,.1);
    outline: none;
    width: 100%;

    &:hover{
        border: 2px solid rgba(255,255,255,.3);
    }

    &:focus{
        border: 2px solid rgba(255,255,255,.5);
    }
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
    color: white;
`;