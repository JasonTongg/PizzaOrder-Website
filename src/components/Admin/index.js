import {BodyContainer, InnerContainer, ContainerHeader, InfoContainer, BigInfoContainer, SmallInfoContainer, CenterInfoContainer, TextP, TextP2, Persentage, Dot, DotRed, DotGreen, PersentageResult, BigText, TextP3, TableHeader, TableHeaderItem, TableRowItem, ProfitContainer, ProfitItem, DotBlue, DotRedd, TableOverflow, TableContainer} from './AdminElements';
import React from 'react';

const Admin = () => {
  return (
    <BodyContainer>
      <ContainerHeader>Admin Panel</ContainerHeader>
      <InnerContainer>
        <ProfitContainer>
          <ProfitItem>
            <TextP>Net Profit</TextP>
              <Persentage>
                <DotBlue></DotBlue>
                <PersentageResult>Rp. 999.999,-</PersentageResult>
              </Persentage>
          </ProfitItem>
          <ProfitItem>
            <TextP>Gross Profit</TextP>
              <Persentage>
                <DotRedd></DotRedd>
                <PersentageResult>Rp. 999.999,-</PersentageResult>
              </Persentage>
          </ProfitItem>
        </ProfitContainer>
        <InfoContainer>
          <BigInfoContainer>
            <SmallInfoContainer>
              <TextP>Pizza Order</TextP>
              <Persentage>
                <Dot></Dot>
                <PersentageResult>100%</PersentageResult>
              </Persentage>
            </SmallInfoContainer>
            <SmallInfoContainer>
              <TextP>Drinks Order</TextP>
              <Persentage>
                <DotRed></DotRed>
                <PersentageResult>100%</PersentageResult>
              </Persentage>
            </SmallInfoContainer>
            <SmallInfoContainer>
              <TextP>Dessert Order</TextP>
              <Persentage>
                <DotGreen></DotGreen>
                <PersentageResult>100%</PersentageResult>
              </Persentage>
            </SmallInfoContainer>
          </BigInfoContainer>
          <CenterInfoContainer>
            <TextP2>Total Product Order</TextP2>
            <BigText>999</BigText>
          </CenterInfoContainer>
          <BigInfoContainer>
            <SmallInfoContainer>
              <TextP>NewYear Voucher</TextP>
              <Persentage>
                <Dot></Dot>
                <PersentageResult>100%</PersentageResult>
              </Persentage>
            </SmallInfoContainer>
            <SmallInfoContainer>
              <TextP>Pizzaria Voucher</TextP>
              <Persentage>
                <DotRed></DotRed>
                <PersentageResult>100%</PersentageResult>
              </Persentage>
            </SmallInfoContainer>
            <SmallInfoContainer>
              <TextP>No Voucher</TextP>
              <Persentage>
                <DotGreen></DotGreen>
                <PersentageResult>100%</PersentageResult>
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
          <TableHeader>
            <TableRowItem>Breakfast Pizza</TableRowItem>
            <TableRowItem>999 pcs</TableRowItem>
            <TableRowItem>Rp. 999.999,-</TableRowItem>
          </TableHeader>
          <TableHeader>
            <TableRowItem>Breakfast Pizza</TableRowItem>
            <TableRowItem>999 pcs</TableRowItem>
            <TableRowItem>Rp. 999.999,-</TableRowItem>
          </TableHeader>
        </TableOverflow>
      </TableContainer>
    </BodyContainer>
  );
};

export default Admin;
