import React from 'react'
import { GlobalStyle } from './globalStyles';
import Footer from './components/Footer';
import CartHero from './components/CartHero';
import CartBody from './components/CartBody';
import {DataList} from './components/CartBody/data';

const cart = () => {
    return (
        <>
            <GlobalStyle />
            <CartHero />
            <CartBody data={DataList} />
            <Footer />
        </>
    )
}

export default cart
