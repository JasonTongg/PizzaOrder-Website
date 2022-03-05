import React from 'react';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo, productDataThree} from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import {Container, ContainerBlack} from './index';

const contact = () => {
    return (
        <>
            <GlobalStyle />
            <Hero />
            <ContainerBlack>
                <Products heading='Choose Your Favorite Pizza' data={productData} />
            </ContainerBlack>
            <Feature />
                <Container>
                <Products heading='Choose Your Fancy Drink' data={productDataTwo} />
                <Products heading='Best Sweets for You' data={productDataThree} />
            </Container>
            <Footer />
        </>
    )
}

export default contact
