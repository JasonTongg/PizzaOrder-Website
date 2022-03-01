import React from 'react'
import { GlobalStyle } from './globalStyles';
import ProductsList from './components/ListProduct';
import { productDataList, productDataTwoList, productDataThreeList} from './components/ListProduct/data';
import Footer from './components/Footer';
import ListHero from './components/listHero';

const list = () => {
    return (
        <>
            <GlobalStyle />
            <ListHero />
            <ProductsList heading='Pizzas' data={productDataList} />
            <ProductsList heading='Drinks' data={productDataTwoList} />
            <ProductsList heading='Sweets' data={productDataThreeList} />
            <Footer />
        </>
    )
}

export default list
