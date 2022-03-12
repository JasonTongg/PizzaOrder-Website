import {BodyContainer, InnerContainer, ContainerHeader, InfoContainer, BigInfoContainer, SmallInfoContainer, CenterInfoContainer, TextP, TextP2, Persentage, Dot, DotRed, DotGreen, PersentageResult, BigText, TextP3, TableHeader, TableHeaderItem, TableRowItem, ProfitContainer, ProfitItem, DotBlue, DotRedd, TableOverflow, TableContainer, TextP4, Container, ZeroContainer, AddUpdateContainer, ZeroHeader, ZeroTableHeader, ZeroItem, ZeroTable, ZeroItems, AddForm, AddLabel, AddInput, AddFormItem, AddSelect, AddOption, AddTextArea, AddLabel1} from './AdminElements';
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

  let Persen = (jumlah) => {
    return (jumlah/JumlahProduct)*100;
  }

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
                <PersentageResult>{Math.round(Persen(PizzaOrder))}%</PersentageResult>
              </Persentage>
            </SmallInfoContainer>
            <SmallInfoContainer>
              <TextP>Drinks Order</TextP>
              <Persentage>
                <DotRed></DotRed>
                <PersentageResult>{Math.round(Persen(DrinksOrder))}%</PersentageResult>
              </Persentage>
            </SmallInfoContainer>
            <SmallInfoContainer>
              <TextP>Dessert Order</TextP>
              <Persentage>
                <DotGreen></DotGreen>
                <PersentageResult>{Math.round(Persen(SweetsOrder))}%</PersentageResult>
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
                <PersentageResult>{Math.round(Persen(NewYear))}%</PersentageResult>
              </Persentage>
            </SmallInfoContainer>
            <SmallInfoContainer>
              <TextP>Pizzaria Voucher</TextP>
              <Persentage>
                <DotRed></DotRed>
                <PersentageResult>{Math.round(Persen(Pizzaria))}%</PersentageResult>
              </Persentage>
            </SmallInfoContainer>
            <SmallInfoContainer>
              <TextP>No Voucher</TextP>
              <Persentage>
                <DotGreen></DotGreen>
                <PersentageResult>{Math.round(100 - Persen(Pizzaria) - Persen(NewYear))}%</PersentageResult>
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
          <TextP4>Pizza Order</TextP4>
          {lists.filter((item) => cariQty(`${item.name}`)!==0).filter((item) => item.alt === "Pizza").map((item) => (
            <TableHeader>
              <TableRowItem>{item.name}</TableRowItem>
              <TableRowItem>{cariQty(`${item.name}`)} pcs</TableRowItem>
              <TableRowItem>Rp. {cariTotal(`${item.name}`)},-</TableRowItem>
            </TableHeader>
          ))}
          <TextP4>Drinks Order</TextP4>
          {lists.filter((item) => cariQty(`${item.name}`)!==0).filter((item) => item.alt === "Drinks").map((item) => (
            <TableHeader>
              <TableRowItem>{item.name}</TableRowItem>
              <TableRowItem>{cariQty(`${item.name}`)} pcs</TableRowItem>
              <TableRowItem>Rp. {cariTotal(`${item.name}`)},-</TableRowItem>
            </TableHeader>
          ))}
          <TextP4>Dessert Order</TextP4>
          {lists.filter((item) => cariQty(`${item.name}`)!==0).filter((item) => item.alt === "Dessert").map((item) => (
            <TableHeader>
              <TableRowItem>{item.name}</TableRowItem>
              <TableRowItem>{cariQty(`${item.name}`)} pcs</TableRowItem>
              <TableRowItem>Rp. {cariTotal(`${item.name}`)},-</TableRowItem>
            </TableHeader>
          ))}
        </TableOverflow>
      </TableContainer>
      <Container>
        <ZeroContainer>
          <ZeroHeader>Zero Order</ZeroHeader>
          <ZeroTable>
            <ZeroTableHeader>
              <ZeroItems>Product Name</ZeroItems>
            </ZeroTableHeader>
            {lists.filter((item) => cariQty(`${item.name}`)===0).map((item) => (
              <ZeroTableHeader>
                <ZeroItem>{item.name}</ZeroItem>
              </ZeroTableHeader>
            ))}
          </ZeroTable>
        </ZeroContainer>
        <AddUpdateContainer>
          <ZeroHeader>Add Product</ZeroHeader>
          <AddForm onSubmit={''}>
            <AddFormItem>
              <AddLabel for="name">Name</AddLabel>
              <AddInput type="text" id="name"></AddInput>
            </AddFormItem>
            <AddFormItem>
              <AddLabel for="price">Price</AddLabel>
              <AddInput type="text" id="price"></AddInput>
            </AddFormItem>
            <AddFormItem>
              <AddLabel>Type</AddLabel>
              <AddSelect>
                <AddOption>Pizza</AddOption>
                <AddOption>Drinks</AddOption>
                <AddOption>Dessert</AddOption>
              </AddSelect>
            </AddFormItem>
            <AddFormItem>
              <AddLabel1 for="desc">Description</AddLabel1>
              <AddTextArea rows="4" id="desc"></AddTextArea>
            </AddFormItem>
            <AddFormItem>
              <AddLabel for="price">Image</AddLabel>
              <AddInput type="file" name="myImage" accept="image/png, image/gif, image/jpeg"></AddInput>
            </AddFormItem>
          </AddForm>
        </AddUpdateContainer>
      </Container>
    </BodyContainer>
  );
};

export default Admin;
