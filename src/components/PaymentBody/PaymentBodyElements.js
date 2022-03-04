import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaMoneyBillWave, FaCheckCircle } from 'react-icons/fa';

export const PaymentIcon = styled(FaMoneyBillWave)`
    color: white;
    font-size: 8rem;
    margin-right: 1.5rem;

    @media only screen and (max-width: 680px){
        display: none;
    }
`;

export const Container = styled.body`
    background: black;
    padding: 6rem;
    position: relative;
`;

export const RadioForm = styled.form`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    padding: 3rem;
    justify-content: center;
    row-gap: 1rem;
    column-gap: 7rem;
`;

export const RadioLabel = styled.label`

`;

export const RadioLabelImage = styled.img`
    height: 45px;
`;

export const RadioInput = styled.input`
    margin-right: 20px;
    transform: scale(1.7);
    color: white;
    background-clip: content-box;
    appearance: none;
    display: inline-block;
    border-radius: 50%;
    border: 2px solid #bbbbbb;
    padding: 5px;

    &:checked{
        background: #ffa500;
        border: 2px solid white;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
`;

export const TextH1 = styled.h1`
    color: white;
`;

export const TextP = styled.p`
    color: white;
    font-size: 1.5rem;

    @media only screen and (max-width: 680px){
        font-size: 1.2rem;
    }
`;

export const TextH1Black = styled.h1`
    color: black;
    text-align: center;
    margin-bottom: 1rem;
`;

export const TextPBlack = styled.p`
    color: black;
    text-align: justify;
`;

export const Line = styled.div`
    height: 2px;
    width: 100%;
    margin: 0 auto;
    background: #ffa500;
`;

export const PaymentStatus = styled.div`
    width: 100%;
    padding-block: 3rem; 
`;

export const PaymentStatusInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin-top: 1.5rem;

    @media only screen and (max-width: 680px){
        flex-direction: column;
        justify-content: center;
        align-items: start;
    }
`;

export const PaymentStatusText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
`;

export let HargaNominal = 404000;

export const TextH2 = styled.h2`
    color: white;
    font-weight: 300;
    font-size: 2rem;

    @media only screen and (max-width: 680px){
        font-size: 1.5rem;
    }
`;

export const PayBtn = styled.button`
    padding: .5rem 2rem;
    background: white;
    color: black;
    margin-left: 2rem;
    border-radius: 10%;
    font-weight: bold;
    font-size: 1.5rem;
    cursor: pointer;
    border: none;

    &:hover{
        background: #ffa500;
    }

    @media only screen and (max-width: 680px){
        margin-left: 0;
        margin-top: 1rem;
    }
`;

export const PopupContainer = styled(Link)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    z-index: 100;
    display: none;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: rgba(0,0,0,.5);
    color: black;
`;

export const PopupItem = styled.div`
    width: 50%;
    height: 70%;
    border-radius: 5%;
    box-shadow: .1rem .3rem 1.5rem white;
    position: relative;

    @media only screen and (max-width: 1150px){
        width: 65%;
    }

    @media only screen and (max-width: 900px){
        width: 80%;
    }

    @media only screen and (max-width: 500px){
        width: 90%;
    }
`;

export const PopupText = styled.div`
    background: rgba(255,255,255,.7);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1rem;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 720px){
        width: 70%;
    }

    @media only screen and (max-width: 500px){
        width: 80%;
    }
`;

export const PopupImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5%;
`;

export const PopupIcon = styled(FaCheckCircle)`
    font-size: 6rem;
    margin-bottom: .8rem;
`;

export const DisplayPopup = (e) => {
    let popup = document.querySelector('.popup');
    e.preventDefault();
    popup.style.display = "flex";
}