import React from 'react';
import {
  BodyContainer,
  InnerContainer,
  ContainerHeader,
  InfoContainer,
  BigInfoContainer,
  SmallInfoContainer,
  CenterInfoContainer,
  TextP,
  TextP2,
  Persentage,
  Dot,
  DotRed,
  DotGreen,
  PersentageResult,
  BigText,
  TextP3,
  TableHeader,
  TableHeaderItem,
  TableRowItem,
  ProfitContainer,
  ProfitItem,
  DotBlue,
  DotRedd,
  TableOverflow,
  TableContainer,
  TextP4,
  Container,
  ZeroContainer,
  AddUpdateContainer,
  ZeroHeader,
  ZeroTableHeader,
  ZeroItem,
  ZeroItems,
  ZeroItemss,
  ZeroItemsss,
  AddForm,
  AddLabel,
  AddInput,
  AddFormItem,
  AddSelect,
  AddOption,
  AddTextArea,
  AddLabel1,
  DotPurple,
  BtnDelete,
  ZeroItemssRemove,
  ZeroItemsssRemove,
  ZeroTableHeaders,
} from './AdminElements';
import {BlackWhiteButton} from '../SmallElement/Button';
import {Popup3, TextPop, PopText} from '../SmallElement/Popup';
import {useEffect, useState} from 'react';
import axios from 'axios';

const Admin = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState('');
  const [type, setType] = useState('');

  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get('http://localhost:5000/order');
    setProduct(response.data);
  };

  const [lists, setList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const response = await axios.get('http://localhost:5000/list');
    setList(response.data);
  };

  const [code, setCode] = useState('');
  const [persen, setPersen] = useState('');
  const [voucher, setVoucher] = useState([]);

  useEffect(() => {
    getVoucher();
  }, []);

  const getVoucher = async () => {
    const response = await axios.get('http://localhost:5000/voucher');
    setVoucher(response.data);
  };

  const deleteVoucher = async (id) => {
    await axios.delete(`http://localhost:5000/voucher/${id}`);
    getVoucher();
  };

  let JumlahProduct = 0;
  let PizzaOrder = 0;
  let DrinksOrder = 0;
  let SweetsOrder = 0;
  let PastaOrder = 0;
  let Voucher_1 = 0;
  let Voucher_2 = 0;
  let NoVoucher = 0;
  let Profit = 0;
  products.forEach((item, index) => {
    JumlahProduct += item.qty;
    Profit += item.qty * item.price;

    if (item.alt === 'Pizza') {
      PizzaOrder += item.qty;
    } else if (item.alt === 'Drinks') {
      DrinksOrder += item.qty;
    } else if (item.alt === 'Dessert') {
      SweetsOrder += item.qty;
    } else if (item.alt === 'Pasta') {
      PastaOrder += item.qty;
    }

    voucher
      .filter((item, index) => index === 0)
      .forEach((element, index) => {
        if (item.diskon === `${element.code}`) {
          Voucher_1 += item.qty;
        }
      });
    voucher
      .filter((item, index) => index === 1)
      .forEach((element, index) => {
        if (item.diskon === `${element.code}`) {
          Voucher_2 += item.qty;
        }
      });
    if (item.diskon === '') {
      NoVoucher += item.qty;
    }
  });

  let cariQty = (nama) => {
    let temp = 0;
    products.forEach((item) => {
      if (item.name === nama) {
        temp += item.qty;
      }
    });

    return temp;
  };

  let cariTotal = (nama) => {
    let temp = 0;
    products.forEach((item) => {
      if (item.name === nama) {
        temp += item.qty * item.price;
      }
    });

    return temp;
  };

  let Persen = (jumlah) => {
    return (jumlah / JumlahProduct) * 100;
  };

  let voucherStatus1 = voucher.find((item, index) => index === 0);
  let voucherStatus2 = voucher.find((item, index) => index === 1);

  return (
    <BodyContainer>
      <ContainerHeader>Admin Panel</ContainerHeader>
      <InnerContainer>
        <ProfitContainer>
          <ProfitItem>
            <TextP>Net Profit</TextP>
            <Persentage>
              <DotBlue></DotBlue>
              <PersentageResult>
                Rp. {Profit - (Profit * 60) / 100},-
              </PersentageResult>
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
                <Dot data-color="brown" className="dotcolor"></Dot>
                <PersentageResult>
                  {Math.round(Persen(PizzaOrder))}%
                </PersentageResult>
              </Persentage>
            </SmallInfoContainer>
            <SmallInfoContainer>
              <TextP>Drinks Order</TextP>
              <Persentage>
                <DotRed></DotRed>
                <PersentageResult>
                  {Math.round(Persen(DrinksOrder))}%
                </PersentageResult>
              </Persentage>
            </SmallInfoContainer>
            <SmallInfoContainer>
              <TextP>Dessert Order</TextP>
              <Persentage>
                <DotGreen></DotGreen>
                <PersentageResult>
                  {Math.round(Persen(SweetsOrder))}%
                </PersentageResult>
              </Persentage>
            </SmallInfoContainer>
            <SmallInfoContainer>
              <TextP>Pasta Order</TextP>
              <Persentage>
                <DotPurple></DotPurple>
                <PersentageResult>
                  {Math.round(Persen(PastaOrder))}%
                </PersentageResult>
              </Persentage>
            </SmallInfoContainer>
          </BigInfoContainer>
          <CenterInfoContainer>
            <TextP2>Total Product Order</TextP2>
            <BigText>{JumlahProduct}</BigText>
          </CenterInfoContainer>
          <BigInfoContainer>
            <SmallInfoContainer>
              {voucher
                .filter((item, index) => index === 0)
                .map((item, index) => {
                  let print = '';
                  if (item.code === 'Pizzaria0303') {
                    print = 'Pizzaria';
                  } else if (item.code === 'ChineseNewYear') {
                    print = 'Chinese';
                  } else {
                    print = item.code;
                  }
                  return <TextP key={index}>{print} Voucher</TextP>;
                })}
              <TextP>
                {voucherStatus1 === undefined ? 'Voucher Not Available' : ''}
              </TextP>
              <Persentage>
                {voucher
                  .filter((item, index) => index === 0)
                  .map((item, index2) => (
                    <Dot key={index2}></Dot>
                  ))}
                <PersentageResult>
                  {voucherStatus1 === undefined
                    ? ''
                    : Math.round(Persen(Voucher_1)) + '%'}
                </PersentageResult>
              </Persentage>
            </SmallInfoContainer>
            <SmallInfoContainer>
              {voucher
                .filter((item, index) => index === 1)
                .map((item, index2) => {
                  let print = '';
                  if (item.code === 'Pizzaria0303') {
                    print = 'Pizzaria';
                  } else if (item.code === 'ChineseNewYear') {
                    print = 'Chinese';
                  } else {
                    print = item.code;
                  }
                  return <TextP key={index2}>{print} Voucher</TextP>;
                })}
              <TextP>
                {voucherStatus2 === undefined ? 'Voucher Not Available' : ''}
              </TextP>
              <Persentage>
                {voucher
                  .filter((item, index) => index === 1)
                  .map((item, index2) => (
                    <DotRed key={index2}></DotRed>
                  ))}
                <PersentageResult>
                  {voucherStatus2 === undefined
                    ? ''
                    : Math.round(Persen(Voucher_2)) + '%'}
                </PersentageResult>
              </Persentage>
            </SmallInfoContainer>
            <SmallInfoContainer>
              <TextP>
                {voucherStatus1 === undefined && voucherStatus2 === undefined
                  ? 'Past Voucher'
                  : 'Other Voucher'}
              </TextP>
              <Persentage>
                <DotGreen></DotGreen>
                <PersentageResult>
                  {Math.round(
                    100 -
                      Persen(Voucher_2) -
                      Persen(Voucher_1) -
                      Persen(NoVoucher)
                  )}
                  %
                </PersentageResult>
              </Persentage>
            </SmallInfoContainer>
            <SmallInfoContainer>
              <TextP>No Voucher</TextP>
              <Persentage>
                <DotPurple></DotPurple>
                <PersentageResult>
                  {Math.round(Persen(NoVoucher))}%
                </PersentageResult>
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
          {lists
            .filter((item) => cariQty(`${item.name}`) !== 0)
            .filter((item) => item.alt === 'Pizza')
            .map((item, index) => (
              <TableHeader key={index}>
                <TableRowItem>{item.name}</TableRowItem>
                <TableRowItem>{cariQty(`${item.name}`)} pcs</TableRowItem>
                <TableRowItem>Rp. {cariTotal(`${item.name}`)},-</TableRowItem>
              </TableHeader>
            ))}
          <TextP4>Drinks Order</TextP4>
          {lists
            .filter((item) => cariQty(`${item.name}`) !== 0)
            .filter((item) => item.alt === 'Drinks')
            .map((item, index) => (
              <TableHeader key={index}>
                <TableRowItem>{item.name}</TableRowItem>
                <TableRowItem>{cariQty(`${item.name}`)} pcs</TableRowItem>
                <TableRowItem>Rp. {cariTotal(`${item.name}`)},-</TableRowItem>
              </TableHeader>
            ))}
          <TextP4>Dessert Order</TextP4>
          {lists
            .filter((item) => cariQty(`${item.name}`) !== 0)
            .filter((item) => item.alt === 'Dessert')
            .map((item, index) => (
              <TableHeader key={index}>
                <TableRowItem>{item.name}</TableRowItem>
                <TableRowItem>{cariQty(`${item.name}`)} pcs</TableRowItem>
                <TableRowItem>Rp. {cariTotal(`${item.name}`)},-</TableRowItem>
              </TableHeader>
            ))}
          <TextP4>Pasta Order</TextP4>
          {lists
            .filter((item) => cariQty(`${item.name}`) !== 0)
            .filter((item) => item.alt === 'Pasta')
            .map((item, index) => (
              <TableHeader key={index}>
                <TableRowItem>{item.name}</TableRowItem>
                <TableRowItem>{cariQty(`${item.name}`)} pcs</TableRowItem>
                <TableRowItem>Rp. {cariTotal(`${item.name}`)},-</TableRowItem>
              </TableHeader>
            ))}
        </TableOverflow>
      </TableContainer>
      <TextP3>Product Info</TextP3>
      <Container>
        <ZeroContainer>
          <ZeroHeader>Zero Order</ZeroHeader>
          <AddForm>
            <ZeroTableHeaders>
              <ZeroItems>Product Name</ZeroItems>
            </ZeroTableHeaders>
            {lists
              .filter((item) => cariQty(`${item.name}`) === 0)
              .map((item, index) => (
                <ZeroTableHeaders key={index}>
                  <ZeroItem>{item.name}</ZeroItem>
                </ZeroTableHeaders>
              ))}
          </AddForm>
        </ZeroContainer>
        <AddUpdateContainer>
          <ZeroHeader>Add Product</ZeroHeader>
          <AddForm>
            <AddFormItem>
              <AddLabel for="name">Name</AddLabel>
              <AddInput
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                required
              ></AddInput>
            </AddFormItem>
            <AddFormItem>
              <AddLabel for="price">Price</AddLabel>
              <AddInput
                type="text"
                id="price"
                onChange={(e) => setPrice(e.target.value)}
                required
              ></AddInput>
            </AddFormItem>
            <AddFormItem>
              <AddLabel>Type</AddLabel>
              <AddSelect
                id="type"
                onChange={(e) => {
                  setType(e.target.value);
                }}
                required
              >
                <AddOption>Pizza</AddOption>
                <AddOption>Drinks</AddOption>
                <AddOption>Dessert</AddOption>
              </AddSelect>
            </AddFormItem>
            <AddFormItem>
              <AddLabel1 for="desc">Description</AddLabel1>
              <AddTextArea
                rows="4"
                id="desc"
                onChange={(e) => setDesc(e.target.value)}
                required
              ></AddTextArea>
            </AddFormItem>
            <AddFormItem>
              <AddLabel for="image">Image</AddLabel>
              <AddInput
                id="image"
                type="file"
                name="myImage"
                accept="image/png, image/gif, image/jpeg"
                onChange={(e) =>
                  setImage(
                    'https://i.pinimg.com/736x/d9/ad/a7/d9ada78c8353c9597d823aae8031a052.jpg'
                  )
                }
                required
              ></AddInput>
            </AddFormItem>
            <AddFormItem>
              <BlackWhiteButton
                type="submit"
                value="Add Product"
                onClick={(e) => {
                  e.preventDefault();
                  if (
                    document.querySelector('#image').value !== '' &&
                    document.querySelector('#desc').value !== '' &&
                    document.querySelector('#price').value !== '' &&
                    document.querySelector('#name').value !== ''
                  ) {
                    document.querySelector('#image').value = '';
                    document.querySelector('#type').value = '';
                    document.querySelector('#desc').value = '';
                    document.querySelector('#price').value = '';
                    document.querySelector('#name').value = '';
                    axios.post('http://localhost:5000/list', {
                      name: name,
                      price: price,
                      qty: 1,
                      description: desc,
                      alt: type === '' ? 'Pizza' : type,
                      image: image,
                      button: 'Order Now ->',
                    });
                    PopText(3000, 'Product has been added');
                    getProducts();
                  } else {
                    PopText(3000, 'Please complete the form');
                  }
                }}
              ></BlackWhiteButton>
            </AddFormItem>
          </AddForm>
        </AddUpdateContainer>
      </Container>
      <TextP3>Voucher Info</TextP3>
      <Container>
        <ZeroContainer>
          <ZeroHeader>Available Voucher</ZeroHeader>
          <AddForm>
            <ZeroTableHeader>
              <ZeroItemsss>Voucher</ZeroItemsss>
              <ZeroItemsssRemove>Percentage</ZeroItemsssRemove>
              <ZeroItemsss>Action</ZeroItemsss>
            </ZeroTableHeader>
            {voucher.map((item, index) => (
              <ZeroTableHeader key={index}>
                <ZeroItemss>{item.code}</ZeroItemss>
                <ZeroItemssRemove>{item.persentage}</ZeroItemssRemove>
                <BtnDelete
                  onClick={(e) => {
                    e.preventDefault();
                    deleteVoucher(item.id);
                  }}
                >
                  Delete
                </BtnDelete>
              </ZeroTableHeader>
            ))}
          </AddForm>
        </ZeroContainer>
        <AddUpdateContainer>
          <ZeroHeader>Add Voucher</ZeroHeader>
          <AddForm>
            <AddFormItem>
              <AddLabel for="code">Code</AddLabel>
              <AddInput
                type="text"
                id="code"
                onChange={(e) => setCode(e.target.value)}
                required
              ></AddInput>
            </AddFormItem>
            <AddFormItem>
              <AddLabel for="persen">Percentage</AddLabel>
              <AddInput
                type="text"
                id="persen"
                onChange={(e) => setPersen(e.target.value)}
                required
              ></AddInput>
            </AddFormItem>
            <AddFormItem>
              <BlackWhiteButton
                type="submit"
                value="Add Voucher"
                onClick={(e) => {
                  e.preventDefault();
                  if (
                    document.querySelector('#code').value !== '' &&
                    document.querySelector('#persen').value !== ''
                  ) {
                    document.querySelector('#code').value = '';
                    document.querySelector('#persen').value = '';
                    axios.post('http://localhost:5000/voucher', {
                      code: code,
                      persentage: persen,
                    });
                    PopText(3000, 'Voucher has been added');
                    getProducts();
                  } else {
                    PopText(3000, 'Please complete the form');
                  }
                }}
              ></BlackWhiteButton>
            </AddFormItem>
          </AddForm>
        </AddUpdateContainer>
      </Container>
      <Popup3 className="popupstatus">
        <TextPop className="popuptext"></TextPop>
      </Popup3>
    </BodyContainer>
  );
};

export default Admin;
