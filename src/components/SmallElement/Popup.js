import styled from 'styled-components';
import { keyframes } from "styled-components";
import bg from '../../images/pop.jpg';

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

export const Popup1 = styled.div`
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
    animation-duration: 1s;
    animation-iteration-count: infinite;
    display: none;
    border-radius: 15px;
    box-shadow: 0rem 0rem .7rem white;
    align-items: center;
    justify-content: center;
    padding: .5rem;
    text-align: center;
    z-index: 100;
`;

export const Popup3 = styled.div`
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
    z-index: 100;
`;

export const TextPop = styled.p`
    font-size: 1.2rem;
    color: white;
`;

export const Pop = (waktu) => {
    document.querySelector(".popupstatus").style.display = "flex";
    setTimeout((e) => {
        try {
            document.querySelector(".popupstatus").style.display = "none";
        } catch (error) {
            console.log(error);
        }
    }, waktu);
}

export const PopText = (waktu, text) => {
    document.querySelector(".popuptext").innerHTML = text;
    document.querySelector(".popupstatus").style.display = "flex";
    setTimeout((e) => {
        try {
            document.querySelector(".popupstatus").style.display = "none";
        } catch (error) {
            console.log(error);
        }
    }, waktu);
}