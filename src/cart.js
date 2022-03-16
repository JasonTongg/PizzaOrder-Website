import React from 'react'
import { GlobalStyle } from './globalStyles';
import Footer from './components/Footer';
import CartHero from './components/SmallHero';
import CartBody from './components/CartBody';
import {OverflowHidden} from './index';

const cart = () => {
    return (
        <OverflowHidden>
            <GlobalStyle />
            <CartHero Header={`Food Cart & Payment`}/>
            <CartBody/>
            <Footer />
        </OverflowHidden>
    )
}

export default cart
