import React from 'react';
import { RadioLabel, RadioInput, RadioForm, InputContainer, RadioLabelImage, Line, Container, PaymentIcon, PaymentStatus, TextH1, PaymentStatusInfo, PaymentStatusText, TextP, HargaNominal, TextH2, PopupContainer, PopupItem, PopupText, PopupImage, TextH1Black, TextPBlack, PopupIcon, PaymentVoucher, VoucherInput, VoucherStatus} from './PaymentBodyElements';
import {Popup1, TextPop, Pop} from "../SmallElement/Popup";
import {BtnV2} from '../SmallElement/Button';
import bca from '../../images/bca.png';
import bni from '../../images/bni.png';
import mandiri from '../../images/mandiri.png';
import bri from '../../images/bri.png';
import ovo from '../../images/ovo.png';
import gopay from '../../images/gopay.png';
import dana from '../../images/dana.png';
import shopeepay from '../../images/shopeepay.png';
import PopupImg from '../../images/popup.png';
import {useEffect, useState} from 'react';
import axios from 'axios';

const PaymentBody = () => {
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    getOrder();
  }, [])

  const getOrder = async () => {
    const response = await axios.get('http://localhost:5000/order');
    setOrder(response.data);
  }

  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    const response = await axios.get('http://localhost:5000/cart');
    setProduct(response.data);
  }

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/cart/${id}`);
    getProducts();
  }

  let total = HargaNominal();
  let cekDiskon = () => {
    return document.querySelector(".voucher").value;
  }

  return (
    <Container>
      <TextH1>Payment Methods</TextH1>
      <RadioForm>
        <InputContainer>
          <RadioInput type="radio" id="bca" name="paymentMethod" required value="bca"></RadioInput>
          <RadioLabel for="bca"><RadioLabelImage src={bca}></RadioLabelImage></RadioLabel>
        </InputContainer>
        <InputContainer>
          <RadioInput type="radio" id="mandiri" name="paymentMethod" value="mandiri"></RadioInput>
          <RadioLabel for="mandiri"><RadioLabelImage src={mandiri}></RadioLabelImage></RadioLabel>
        </InputContainer>
        <InputContainer>
          <RadioInput type="radio" id="bri" name="paymentMethod" value="bri"></RadioInput>
          <RadioLabel for="bri"><RadioLabelImage src={bri}></RadioLabelImage></RadioLabel>
        </InputContainer>
        <InputContainer>
          <RadioInput type="radio" id="bni" name="paymentMethod" value="bni"></RadioInput>
          <RadioLabel for="bni"><RadioLabelImage src={bni}></RadioLabelImage></RadioLabel>
        </InputContainer>
        <InputContainer>
          <RadioInput type="radio" id="ovo" name="paymentMethod" value="ovo"></RadioInput>
          <RadioLabel for="ovo"><RadioLabelImage src={ovo}></RadioLabelImage></RadioLabel>
        </InputContainer>
        <InputContainer>
          <RadioInput type="radio" id="gopay" name="paymentMethod" value="gopay"></RadioInput>
          <RadioLabel for="gopay"><RadioLabelImage src={gopay}></RadioLabelImage></RadioLabel>
        </InputContainer>
        <InputContainer>
          <RadioInput type="radio" id="shopeepay" name="paymentMethod" value="shopeepay"></RadioInput>
          <RadioLabel for="shopeepay"><RadioLabelImage src={shopeepay}></RadioLabelImage></RadioLabel>
        </InputContainer>
        <InputContainer>
          <RadioInput type="radio" id="dana" name="paymentMethod" value="dana"></RadioInput>
          <RadioLabel for="dana"><RadioLabelImage src={dana}></RadioLabelImage></RadioLabel>
        </InputContainer>
      </RadioForm>
      {console.log(document.querySelector('input[name="paymentMethod"]:checked')?.value)}
      <Line></Line>
      <PaymentStatus>
        <TextH1>Payment Status</TextH1>
        <PaymentStatusInfo>
          <PaymentIcon></PaymentIcon>
          <PaymentStatusText>
            <TextP>Jumlah Nominal: Rp. {total},-</TextP>
            <TextP>Biaya Administrasi: Rp. 15000,-</TextP>
            <TextP>PPN: Rp. {total/10},-</TextP>
          </PaymentStatusText>
        </PaymentStatusInfo>
        <PaymentStatusInfo>
          <TextH2 className='total'>Total: Rp. {total + total/10 + 15000},-</TextH2>
          <BtnV2 onClick={(e) => {
            if(document.querySelector('input[name="paymentMethod"]:checked')?.value!==undefined){
              products.forEach((item) => {
                deleteProduct(item.id);
                let popup = document.querySelector('.popup');
                e.preventDefault();
                popup.style.display = "flex";
                console.log(cekDiskon());
                axios.post('http://localhost:5000/order', {
                    name: item.name,
                    price: item.price,
                    qty: item.qty,
                    alt: item.alt,
                    diskon: cekDiskon()
                })
              })
            }
            else{
              Pop(3000);
            }
          }}>Pay</BtnV2>
        </PaymentStatusInfo>
        <PaymentVoucher>
          <VoucherInput placeholder='Input Voucher Code' className='voucher' onChange={(e) => {
              if(e.target.value === "NewYear"){
                total=0;
                products.forEach((item) => {
                  total+=(item.price * item.qty);
                });
                let diskon=total*15/100;
                total=total-diskon;
                total = total + total/15 + 15000;
                total=Math.round(total);
                document.querySelector('.status').innerHTML = "Discount 15%";
                document.querySelector('.total').innerHTML = `Total: Rp. ${total},-`;
              }
              else if(e.target.value === "Pizzaria0303"){
                total=0;
                products.forEach((item) => {
                  total+=(item.price * item.qty);
                });
                total= total + total/40 + 15000;
                let diskon=total*40/100;
                total=total-diskon;
                total=Math.round(total);
                
                document.querySelector('.status').innerHTML = "Discount 40%";
                document.querySelector('.total').innerHTML = `Total: Rp. ${total},-`;
              }
              else if(e.target.value === "ChineseNewYear"){
                total=0;
                products.forEach((item) => {
                  total+=(item.price * item.qty);
                });
                total= total + total/30 + 15000;
                let diskon=total*30/100;
                total=total-diskon;
                total=Math.round(total);
                
                document.querySelector('.status').innerHTML = "Discount 30%";
                document.querySelector('.total').innerHTML = `Total: Rp. ${total},-`;
              }
              else{
                document.querySelector('.status').innerHTML = "Not Available";
              }
          }}></VoucherInput>
          <VoucherStatus className='status'></VoucherStatus>
        </PaymentVoucher>
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
      <Popup1 className='popupstatus'>
        <TextPop>Please complete the form</TextPop>
      </Popup1>
    </Container>
  );
};

export default PaymentBody;
