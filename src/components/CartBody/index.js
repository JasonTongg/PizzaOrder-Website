import React from 'react';
import {
  ProductsContainer,
  ProductWrapper,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductPrice,
  PlusIcon,
  ProductQty,
  MinIcon,
  QtyCount,
  Line,
  TextHeader,
  TextP,
  Btn,
  InfoContainer
} from './ProductsElements';

const Products = ({ data, list }) => {
  return (
    <ProductsContainer>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductQty>
                  <PlusIcon></PlusIcon>
                  <QtyCount type="number" value="1"></QtyCount>
                  <MinIcon></MinIcon>
                </ProductQty>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
      <Line></Line>
      <InfoContainer>
        <TextHeader>Total</TextHeader>
        <TextP>Rp. 400.000,-</TextP>
        <Btn to='/payment'>Next</Btn>
      </InfoContainer>
    </ProductsContainer>
  );
};

export default Products;
