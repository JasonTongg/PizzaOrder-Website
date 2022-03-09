import React from 'react'
import { GlobalStyle } from './globalStyles';
import Footer from './components/Footer';
import PaymentHero from './components/CartHero';
import PaymentBody from './components/PaymentBody';
import {OverflowHidden} from './index';

const payment = () => {
    return (
        <OverflowHidden>
            <GlobalStyle />
            <PaymentHero />
            <PaymentBody />
            <Footer />
        </OverflowHidden>
    )
}

export default payment
