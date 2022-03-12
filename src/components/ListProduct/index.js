import {useState, useEffect} from 'react';
import axios from 'axios';
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
  Popup,
  TextPop
} from './ProductsElements';
import {
  HeroBtn
} from '../Hero/HeroElements';

const Products = ({ heading, data1,data2, list }) => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [qty, setQty] = useState('');
  const [alt, setAlt] = useState('');
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    const response = await axios.get('http://localhost:5000/cart');
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

  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/cart', {
      name: name,
      price: price,
      qty: qty,
      alt: alt
    })
    getProducts();
  }

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/cart/${id}`);
    getProducts();
  }

  const Pop = async () => {
    document.querySelector(".popupstatus").style.display = "flex";
    setTimeout((e) => {
      document.querySelector(".popupstatus").style.display = "none";
    }, 3000);
  }

  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {lists.map((product, index) => {
          if (index>=data1 && index<=data2) {
            return (
              <ProductCard onSubmit={saveProduct}>
                <ProductImg src={product.image} alt={product.alt} />
                <ProductInfo>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductDesc>{product.description}</ProductDesc>
                  <ProductPrice>Rp. {product.price},-</ProductPrice>
                  <HeroBtn onClick={(e) => {
                    let cek;
                    Pop();
                    cek = products.find((item) => item.name === product.name);
                    if(cek===undefined){
                      setName(product.name);
                      setPrice(product.price);
                      setQty(product.qty);
                      setAlt(product.alt);
                    }
                    else{
                      let newQty = cek.qty+1;
                      deleteProduct(cek.id);
                      console.log(cek.id);
                      setName(product.name);
                      setPrice(product.price);
                      setQty(newQty);
                      setAlt(product.alt);
                    }
                  }}>{product.button}</HeroBtn>
                </ProductInfo>
              </ProductCard>
            );
          }
          return null;
        })}
      </ProductWrapper>
      <Popup className='popupstatus'><TextPop>Product Successfully Added</TextPop></Popup>
    </ProductsContainer>
  );
};

export default Products;
