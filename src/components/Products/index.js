import React from 'react';
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductMore
} from './ProductsElements';
import {
  HeroBtn
} from '../Hero/HeroElements';

const Products = ({ heading, data, list }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <HeroBtn>{product.button}</HeroBtn>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
      <ProductMore to="productList">See More</ProductMore>
    </ProductsContainer>
  );
};

export default Products;
