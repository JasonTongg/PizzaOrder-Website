import React from 'react'
import { GlobalStyle } from './globalStyles';
import Footer from './components/FooterAdmin';
import {OverflowHidden} from './index';
import MessagePage from './components/Message';
import Navbar from './components/AdminNavbar'

const message = () => {
    return (
        <OverflowHidden>
            <GlobalStyle />
            <Navbar/>
            <MessagePage></MessagePage>
            <Footer />
        </OverflowHidden>
    )
}

export default message
