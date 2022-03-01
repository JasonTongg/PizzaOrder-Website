import React from 'react'
import { GlobalStyle } from './globalStyles';
import Footer from './components/Footer';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm'

const contact = () => {
    return (
        <>
            <GlobalStyle />
            <ContactHero />
            <ContactForm />
            <Footer />
        </>
    )
}

export default contact
