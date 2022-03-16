import React from 'react'
import { GlobalStyle } from './globalStyles';
import Footer from './components/Footer';
import PaymentHero from './components/SmallHero';
import PaymentBody from './components/PaymentBody';
import {OverflowHidden} from './index';

const payment = () => {
    return (
        <OverflowHidden>
            <GlobalStyle />
            <PaymentHero Header={`Payment`}/>
            <PaymentBody />
            <Footer />
        </OverflowHidden>
    )
}

export default payment
