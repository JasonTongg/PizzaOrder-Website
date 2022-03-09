import React from 'react'
import { GlobalStyle } from './globalStyles';
import ProductsList from './components/ListProduct';
import Footer from './components/Footer';
import ListHero from './components/listHero';
import {OverflowHidden} from './index';

const list = () => {
    return (
        <OverflowHidden>
            <GlobalStyle />
            <ListHero />
            <ProductsList heading='Pizzas' data1={`${0}`} data2={`${8}`}/>
            <ProductsList heading='Drinks' data1={`${9}`} data2={`${11}`} />
            <ProductsList heading='Sweets' data1={`${12}`} data2={`${14}`} />
            <Footer />
        </OverflowHidden>
    )
}

export default list
