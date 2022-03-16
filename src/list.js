import React from 'react'
import { GlobalStyle } from './globalStyles';
import ProductsList from './components/ListProduct';
import Footer from './components/Footer';
import ListHero from './components/listHero';
import {OverflowHidden} from './index';
import NewProduct from './components/NewProduct';

const list = () => {
    return (
        <OverflowHidden>
            <GlobalStyle />
            <ListHero />
            <NewProduct heading='New Menu' data={`${15}`}/>
            <ProductsList heading='Pizzas' type={'Pizza'}/>
            <ProductsList heading='Drinks' type={'Drinks'} />
            <ProductsList heading='Sweets' type={'Dessert'} />
            <ProductsList heading='Pasta' type={'Pasta'} />
            <Footer />
        </OverflowHidden>
    )
}

export default list
