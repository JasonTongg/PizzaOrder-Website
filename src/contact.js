import React from 'react'
import { GlobalStyle } from './globalStyles';
import Footer from './components/Footer';
import ContactHero from './components/ContactHero';
import ContactForm from './components/ContactForm';
import {OverflowHidden} from './index';

const contact = () => {
    return (
        <OverflowHidden>
            <GlobalStyle />
            <ContactHero />
            <ContactForm />
            <Footer />
        </OverflowHidden>
    )
}

export default contact
