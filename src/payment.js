import React from 'react'
import { GlobalStyle } from './globalStyles';
import Footer from './components/Footer';
import PaymentHero from './components/CartHero';
import PaymentBody from './components/PaymentBody'

const payment = () => {
    return (
        <>
            <GlobalStyle />
            <PaymentHero />
            <PaymentBody />
            <Footer />
        </>
    )
}

export default payment
