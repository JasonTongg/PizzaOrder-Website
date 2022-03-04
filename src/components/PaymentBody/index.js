import React from 'react';
import { RadioLabel, RadioInput, RadioForm, InputContainer, RadioLabelImage, Line, Container, PaymentIcon, PaymentStatus, TextH1, PaymentStatusInfo, PaymentStatusText, TextP, HargaNominal, TextH2, PayBtn, PopupContainer, PopupItem, PopupText, PopupImage, TextH1Black, TextPBlack, PopupIcon, DisplayPopup } from './PaymentBodyElements';
import bca from '../../images/bca.png';
import bni from '../../images/bni.png';
import mandiri from '../../images/mandiri.png';
import bri from '../../images/bri.png';
import ovo from '../../images/ovo.png';
import gopay from '../../images/gopay.png';
import dana from '../../images/dana.png';
import shopeepay from '../../images/shopeepay.png';
import PopupImg from '../../images/popup.png';

const PaymentBody = () => {
  return (
    <Container>
      <TextH1>Payment Methods</TextH1>
      <RadioForm>
        <InputContainer>
          <RadioInput type="radio" id="bca" name="paymentMethod"></RadioInput>
          <RadioLabel for="bca"><RadioLabelImage src={bca}></RadioLabelImage></RadioLabel>
        </InputContainer>
        <InputContainer>
          <RadioInput type="radio" id="mandiri" name="paymentMethod"></RadioInput>
          <RadioLabel for="mandiri"><RadioLabelImage src={mandiri}></RadioLabelImage></RadioLabel>
        </InputContainer>
        <InputContainer>
          <RadioInput type="radio" id="bri" name="paymentMethod"></RadioInput>
          <RadioLabel for="bri"><RadioLabelImage src={bri}></RadioLabelImage></RadioLabel>
        </InputContainer>
        <InputContainer>
          <RadioInput type="radio" id="bni" name="paymentMethod"></RadioInput>
          <RadioLabel for="bni"><RadioLabelImage src={bni}></RadioLabelImage></RadioLabel>
        </InputContainer>
        <InputContainer>
          <RadioInput type="radio" id="ovo" name="paymentMethod"></RadioInput>
          <RadioLabel for="ovo"><RadioLabelImage src={ovo}></RadioLabelImage></RadioLabel>
        </InputContainer>
        <InputContainer>
          <RadioInput type="radio" id="gopay" name="paymentMethod"></RadioInput>
          <RadioLabel for="gopay"><RadioLabelImage src={gopay}></RadioLabelImage></RadioLabel>
        </InputContainer>
        <InputContainer>
          <RadioInput type="radio" id="shopeepay" name="paymentMethod"></RadioInput>
          <RadioLabel for="shopeepay"><RadioLabelImage src={shopeepay}></RadioLabelImage></RadioLabel>
        </InputContainer>
        <InputContainer>
          <RadioInput type="radio" id="dana" name="paymentMethod"></RadioInput>
          <RadioLabel for="dana"><RadioLabelImage src={dana}></RadioLabelImage></RadioLabel>
        </InputContainer>
      </RadioForm>
      <Line></Line>
      <PaymentStatus>
        <TextH1>Payment Status</TextH1>
        <PaymentStatusInfo>
          <PaymentIcon></PaymentIcon>
          <PaymentStatusText>
            <TextP>Jumlah Nominal: Rp. {HargaNominal},-</TextP>
            <TextP>Biaya Administrasi: Rp. 15000,-</TextP>
            <TextP>PPN: Rp. {HargaNominal/10},-</TextP>
          </PaymentStatusText>
        </PaymentStatusInfo>
        <PaymentStatusInfo>
          <TextH2>Total: Rp. {HargaNominal + HargaNominal/10 + 15000},-</TextH2>
          <PayBtn onClick={DisplayPopup}>Pay</PayBtn>
        </PaymentStatusInfo>
      </PaymentStatus>
      <PopupContainer to="/" className="popup">
        <PopupItem>
          <PopupImage src={PopupImg}></PopupImage>
          <PopupText>
            <PopupIcon></PopupIcon>
            <TextH1Black>Payment Successfull</TextH1Black>
            <TextPBlack>thank you for order at pizzaria. we are processing your order, please wait a moment and if there are problems please contact us on the contact us menu</TextPBlack>
          </PopupText>
        </PopupItem>
      </PopupContainer>
    </Container>
  );
};

export default PaymentBody;
