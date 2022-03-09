import React from 'react'
import { GlobalStyle } from './globalStyles';
import Footer from './components/Footer';
import CartHero from './components/CartHero';
import CartBody from './components/CartBody';
import {OverflowHidden} from './index';

const cart = () => {
    return (
        <OverflowHidden>
            <GlobalStyle />
            <CartHero />
            <CartBody/>
            <Footer />
        </OverflowHidden>
    )
}

export default cart
