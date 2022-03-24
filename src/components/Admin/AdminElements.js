import styled from 'styled-components';

export const BodyContainer = styled.body`
    background: #121421;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    box-sizing: border-box;

    @media only screen and (max-width: 600px){
        padding: 1rem;
    }
`;

export const InnerContainer = styled.div`
    background: #1d202d;
    width: 90%;
    border-radius: 30px;
    padding: 3rem;

    @media only screen and (max-width: 600px){
        padding: 2rem;
    }

    @media only screen and (max-width: 370px){
        padding: 1rem;
    }
`;

export const ContainerHeader = styled.h1`
    color: white;
    align-self: start;
    margin-left: 4.5rem;
    margin-bottom: 1rem;
`;

export const InfoContainer = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.5rem;

    @media only screen and (max-width: 1370px){
        grid-template-columns: 1fr 1fr;
        height: 480px;
    }

    @media only screen and (max-width: 850px){
        height: 650px;
        gap: 1rem;
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
    padding: .5rem 1rem;

    @media only screen and (max-width: 440px){
        flex-direction: column;
        padding: .2rem 1rem
    }
`;

export const BigInfoContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 1.5rem;
    width: 100%;

    @media only screen and (max-width: 850px){
        grid-column: 1/-1;
        gap: 1rem
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
        grid-row: 1/ 1;
    }
`;

export const TextP = styled.p`
    font-size: 1.5rem;
    color: #676b78;
    text-align: center;

    @media only screen and (max-width: 970px){
        font-size: 1.2rem;
    }

    @media only screen and (max-width: 440px){
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
    margin-inline: .5rem;
`;

export const DotPurple = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #b658f5;
    margin-inline: .5rem;
`;

export const DotRed = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #e47992;
    margin-inline: .5rem;
`;

export const DotGreen = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #37be9a;
    margin-inline: .5rem;
`;

export const DotBlue = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #6eb3d6;
    margin-inline: 1rem;
`;

export const DotRedd = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: red;
    margin-inline: 1rem;
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
    color: white;
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

    @media only screen and (max-width: 850px){
        gap: 1rem;
    }

    @media only screen and (max-width: 570px){
        grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    }

    @media only screen and (max-width: 330px){
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

    @media only screen and (max-width: 440px){
        flex-direction: column;
    }
`;

export const TableOverflow = styled.div`
    max-height: 500px;
    min-width: 700px;
    overflow-y: auto;
    overflow-x: hidden;

    ::-webkit-scrollbar{
        background: none;
        width: 1px;
    }
    
    ::-webkit-scrollbar-track {
        background: rgba(0,0,0,0);
        outline: none;
        border: 1px solid rgba(255,255,255,.2);
    }
    
    ::-webkit-scrollbar-thumb {
        background: rgba(255,255,255,.7); 
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: white; 
    }
`;

export const TableContainer = styled.div`
    width: 90%;
    border-radius: 30px;
    padding: 1.5rem;
    background: #1d202d;
    overflow-y: hidden;
    overflow-x: auto;

    ::-webkit-scrollbar{
        background: none;
        height: 10px;
    }
    
    ::-webkit-scrollbar-track {
        background: rgba(0,0,0,0);
        outline: none;
        border: 1px solid rgba(255,255,255,.2);
    }
    
    ::-webkit-scrollbar-thumb {
        background: rgba(255,255,255,.7); 
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: white; 
    }

`;

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    width: 90%;

    @media only screen and (max-width: 1230px){
        grid-template-columns: 1fr;
    }

    @media only screen and (max-width: 850px){
        gap: 1rem;
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
    margin-bottom: 1rem;
`;

export const ZeroTableHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 1rem;
    padding-bottom: 1rem;

    @media only screen and (max-width: 456px){
        justify-content: space-between;
    }
`;

export const ZeroTableHeaders = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 1rem;
    padding-bottom: 1rem;
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

export const ZeroItemss = styled.p`
    color: white;
    font-size: 1.4rem;
    width: 300px;
    text-align: center;

    @media only screen and (max-width: 700px){
        width: 200px;
        font-size: 1.2rem;
    }

    @media only screen and (max-width: 456px){
        width: 100px;
        text-align: start;
    }
`;

export const ZeroItemssRemove = styled.p`
    color: white;
    font-size: 1.4rem;
    width: 300px;
    text-align: center;

    @media only screen and (max-width: 700px){
        width: 200px;
        font-size: 1.2rem;
    }

    @media only screen and (max-width: 660px){
        display: none;
    }
`;

export const ZeroItemsss = styled.p`
    color: #676b78;
    font-size: 1.5rem;
    text-align: center;
    width: 300px;

    @media only screen and (max-width: 700px){
        width: 200px;
        font-size: 1.3rem;
    }

    @media only screen and (max-width: 456px){
        width: 100px;
    }
`;

export const ZeroItemsssRemove = styled.p`
    color: #676b78;
    font-size: 1.5rem;
    text-align: center;
    width: 300px;

    @media only screen and (max-width: 700px){
        width: 200px;
        font-size: 1.3rem;
    }

    @media only screen and (max-width: 575px){
        display: none;
    }
`;

export const BtnDelete = styled.button`
    width: 300px; 
    padding: .5rem;
    background: rgb(242, 75, 75);
    border: none;
    border-radius: 15px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    font-size: 1.3rem;

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

    @media only screen and (max-width: 700px){
        width: 200px;
        font-size: 1.1rem;
        padding: .5rem;
    }

    @media only screen and (max-width: 456px){
        padding-block: .2rem;
        width: 100px;
    }
`;

export const AddUpdateContainer = styled.div`
    width: 100%;
    height: 100%;
    background: #1d202d;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    padding: 1.5rem;
    max-height: 380px;
`;

export const ZeroContainer = styled.div`
    width: 100%;
    background: #1d202d;
    overflow: auto;
    border-radius: 30px;
    max-height: 380px;
    padding: 1rem;

    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
`;

export const AddForm = styled.form`
    width: 100%;
    padding-inline: 1rem;
    background: #1d202d;
    overflow: auto;
    border-radius: 30px;
    max-height: 380px;
    
    ::-webkit-scrollbar{
        background: none;
        width: 1px;
    }
    
    ::-webkit-scrollbar-track {
        background: rgba(0,0,0,0);
        outline: none;
        border: 1px solid rgba(255,255,255,.2);
    }
    
    ::-webkit-scrollbar-thumb {
        background: rgba(255,255,255,.7); 
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: white; 
    }
`;

export const AddFormItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    margin-bottom: 1rem;
    margin-top: 1rem;

    @media only screen and (max-width: 500px){
        flex-direction: column;
        justify-content: center;
        align-items: start;
    }
`;

export const AddLabel = styled.label`
    margin-right: 1rem;
    color: white;
    font-size: 1.2rem;
    width: 120px;
    text-align: end;

    @media only screen and (max-width: 500px){
        text-align: start;
        margin-right: 0;
        margin-block: .2rem;
    }
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