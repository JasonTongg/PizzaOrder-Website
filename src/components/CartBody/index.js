import {useEffect, useState} from 'react';
import axios from 'axios';
import {
  ProductsContainer, ProductWrapper, ProductTitle, ProductCard, ProductInfo, ProductPrice,Line, TextHeader, TextP, Btn, InfoContainer, ProductQty, ProductLinear, ProductQtyContainer, ProductDelete, ProductButton
} from './ProductsElements';

const Products = ({ data, list }) => {

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

  let total=0;
  let cek=false;

  return (
    <ProductsContainer>
      <ProductWrapper>
        {products.map((product, index) => (
          <ProductCard key={index}>
            <ProductLinear></ProductLinear>
            <ProductQtyContainer>
              <ProductQty>{product.qty}</ProductQty>
            </ProductQtyContainer>
            <ProductInfo>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductPrice>Rp. {product.price * product.qty},-</ProductPrice>
              <ProductButton>
                <ProductDelete onClick={(e) => deleteProduct(product.id)}>Delete</ProductDelete>
              </ProductButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductWrapper>
      <Line></Line>
      <InfoContainer>
        {products.forEach((item) => {
            total+=(item.price * item.qty);
        })}
        <TextHeader>{total!==0?`Total`:'Cart is Empty'}</TextHeader>
        <TextP>{total!==0?`Rp. ${total},-`:null}</TextP>
        {products.map((item) => {
          if(total!==0 && cek===false){
            cek=true;
            return(
              <Btn className="btn" to="/payment">Next</Btn>
            )
          }
          return null;
        })}
      </InfoContainer>
    </ProductsContainer>
  );
};

export default Products;
