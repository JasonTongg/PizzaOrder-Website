import React from 'react'
import { GlobalStyle } from './globalStyles';
import Footer from './components/Footer';
import CartHero from './components/CartHero';

const cart = () => {
    return (
        <>
            <GlobalStyle />
            <CartHero />
            <Footer />
        </>
    )
}

export default cart
