import styled from 'styled-components';

export const BodyContainer = styled.body`
    background: #121421;
    padding: 4rem 8rem;
    width: 100vw;
    min-height: 100vh;

    @media only screen and (max-width: 720px){
        padding: 4rem 4rem;
    }

    @media only screen and (max-width: 600px){
        padding: 4rem 2rem;
    }
`;

export const BodyHeader = styled.h1`
    color: white;
    margin-bottom: 1.5rem;
`;

export const InnerContainer = styled.div`
    width; 80%;
    height: 70%;
    border-radius: 15px;
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 1.5rem;

    @media only screen and (max-width: 540px){
        padding: 0;
    }

    @media only screen and (max-width: 460px){
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }
`;

export const MessageItem = styled.div`
    background: #1d202d;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 1.5rem;
    border-radius: 15px;
`;

export const Top = styled.div``;

export const MessageSubjectContainer = styled.div`
    background: #292c38;
    border-radius: 10px;
    padding: .5rem 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 400px){
        flex-direction: column-reverse;
        align-items: center;
        padding: .5rem .5rem;
    }
`;

export const MessageSubject = styled.p`
    font-size: 1.5rem;
    color: white;
`;

export const MessageInfo = styled.p`
    font-size: 1.2rem;
    color: #676b70;
    margin-top: .5rem;
`;

export const MessageBody = styled.p`
    font-size: 1.2rem;
    color: white;
    text-align: justify;
`;