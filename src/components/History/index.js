import {useEffect, useState} from 'react';
import axios from 'axios';
import {
  BodyContainer,
  BodyHeader,
  TableHeader,
  HeaderItem,
  TableItemContainer,
  HeaderItems,
} from './HistoryElements';

const Err = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get('http://localhost:5000/order');
    setProduct(response.data);
  };

  return (
    <BodyContainer>
      <BodyHeader>Order Information</BodyHeader>
      <TableItemContainer>
        <TableHeader>
          <HeaderItem>ID</HeaderItem>
          <HeaderItem>Name</HeaderItem>
          <HeaderItem>Price</HeaderItem>
          <HeaderItem>Quantity</HeaderItem>
          <HeaderItem>Order Date</HeaderItem>
          <HeaderItem>Total</HeaderItem>
        </TableHeader>
        {Array.from(products)
          .reverse()
          .map((product, index) => (
            <TableHeader key={index}>
              <HeaderItems>{index + 1}</HeaderItems>
              <HeaderItems>{product.name}</HeaderItems>
              <HeaderItems>Rp. {product.price},-</HeaderItems>
              <HeaderItems>{product.qty}</HeaderItems>
              <HeaderItems>{product.createdAt}</HeaderItems>
              <HeaderItems>Rp. {product.price * product.qty},-</HeaderItems>
            </TableHeader>
          ))}
      </TableItemContainer>
    </BodyContainer>
  );
};

export default Err;
