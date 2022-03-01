import React from 'react'
import { GlobalStyle } from './globalStyles';
import Footer from './components/Footer';
import PaymentHero from './components/CartHero';

const payment = () => {
    return (
        <>
            <GlobalStyle />
            <PaymentHero />
            <Footer />
        </>
    )
}

export default payment
