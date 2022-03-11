import {BodyContainer, InnerContainer, ContainerHeader, InfoContainer, BigInfoContainer, SmallInfoContainer, CenterInfoContainer, TextP, TextP2, Persentage, Dot, DotRed, DotGreen, PersentageResult, BigText, TextP3, TableHeader, TableHeaderItem, TableRowItem, ProfitContainer, ProfitItem, DotBlue, DotRedd, TableOverflow, TableContainer} from './AdminElements';
import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';

const Admin = () => {

  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    const response = await axios.get('http://localhost:5000/order');
    setProduct(response.data);
  }

  const [lists, setList] = useState([]);

  useEffect(() => {
    getList();
  }, [])

  const getList = async () => {
    const response = await axios.get('http://localhost:5000/list');
    setList(response.data);
  }
  
  let JumlahProduct=0;
  let PizzaOrder=0;
  let DrinksOrder=0;
  let SweetsOrder=0;
  let NewYear=0;
  let Pizzaria=0;
  let Profit=0;
  products.forEach((item, index) => {
    JumlahProduct += item.qty;
    Profit += item.qty*item.price;

    if(item.alt === "Pizza"){
      PizzaOrder+= item.qty;
    }
    else if(item.alt === "Drinks"){
      DrinksOrder+= item.qty;
    }
    else if(item.alt === "Dessert"){
      SweetsOrder+= item.qty;
    }

    if(item.diskon === "NewYear"){
      NewYear+=item.qty;
    }
    else if(item.diskon === "Pizzaria0303"){
      Pizzaria+=item.qty;
    }
  });

  let cariQty = (nama) => {
    let temp=0;
    products.forEach((item) => {
      if(item.name === nama){
        temp+=item.qty;
      }
    });

    return temp;
  }

  let cariTotal = (nama) => {
    let temp=0;
    products.forEach((item) => {
      if(item.name === nama){
        temp+=item.qty*item.price;
      }
    });

    return temp;
  }

  PizzaOrder = (PizzaOrder/JumlahProduct)*100;
  DrinksOrder = (DrinksOrder/JumlahProduct)*100;
  SweetsOrder = (SweetsOrder/JumlahProduct)*100;
  NewYear = (NewYear/JumlahProduct)*100;
  Pizzaria = (Pizzaria/JumlahProduct)*100;
  return (
    <BodyContainer>
      <ContainerHeader>Admin Panel</ContainerHeader>
      <InnerContainer>
        <ProfitContainer>
          <ProfitItem>
            <TextP>Net Profit</TextP>
              <Persentage>
                <DotBlue></DotBlue>
                <PersentageResult>Rp. {Profit-(Profit*60/100)},-</PersentageResult>
              </Persentage>
          </ProfitItem>
          <ProfitItem>
            <TextP>Gross Profit</TextP>
              <Persentage>
                <DotRedd></DotRedd>
                <PersentageResult>Rp. {Profit},-</PersentageResult>
              </Persentage>
          </ProfitItem>
        </ProfitContainer>
        <InfoContainer>
          <BigInfoContainer>
            <SmallInfoContainer>
              <TextP>Pizza Order</TextP>
              <Persentage>
                <Dot></Dot>
                <PersentageResult>{Math.round(PizzaOrder)}%</PersentageResult>
              </Persentage>
            </SmallInfoContainer>
            <SmallInfoContainer>
              <TextP>Drinks Order</TextP>
              <Persentage>
                <DotRed></DotRed>
                <PersentageResult>{Math.round(DrinksOrder)}%</PersentageResult>
              </Persentage>
            </SmallInfoContainer>
            <SmallInfoContainer>
              <TextP>Dessert Order</TextP>
              <Persentage>
                <DotGreen></DotGreen>
                <PersentageResult>{Math.round(SweetsOrder)}%</PersentageResult>
              </Persentage>
            </SmallInfoContainer>
          </BigInfoContainer>
          <CenterInfoContainer>
            <TextP2>Total Product Order</TextP2>
            <BigText>{JumlahProduct}</BigText>
          </CenterInfoContainer>
          <BigInfoContainer>
            <SmallInfoContainer>
              <TextP>NewYear Voucher</TextP>
              <Persentage>
                <Dot></Dot>
                <PersentageResult>{Math.round(NewYear)}%</PersentageResult>
              </Persentage>
            </SmallInfoContainer>
            <SmallInfoContainer>
              <TextP>Pizzaria Voucher</TextP>
              <Persentage>
                <DotRed></DotRed>
                <PersentageResult>{Math.round(Pizzaria)}%</PersentageResult>
              </Persentage>
            </SmallInfoContainer>
            <SmallInfoContainer>
              <TextP>No Voucher</TextP>
              <Persentage>
                <DotGreen></DotGreen>
                <PersentageResult>{Math.round(100 - Pizzaria - NewYear)}%</PersentageResult>
              </Persentage>
            </SmallInfoContainer>
          </BigInfoContainer>
        </InfoContainer>
      </InnerContainer>
      <TextP3>Order Info</TextP3>
      <TableContainer>
        <TableOverflow>
          <TableHeader>
            <TableHeaderItem>Items</TableHeaderItem>
            <TableHeaderItem>Quantity</TableHeaderItem>
            <TableHeaderItem>Total Price</TableHeaderItem>
          </TableHeader>
          {lists.filter((item) => cariQty(`${item.name}`)!==0).map((item) => (
            <TableHeader>
              <TableRowItem>{item.name}</TableRowItem>
              <TableRowItem>{cariQty(`${item.name}`)} pcs</TableRowItem>
              <TableRowItem>Rp. {cariTotal(`${item.name}`)},-</TableRowItem>
            </TableHeader>
          ))}
        </TableOverflow>
      </TableContainer>
    </BodyContainer>
  );
};

export default Admin;
