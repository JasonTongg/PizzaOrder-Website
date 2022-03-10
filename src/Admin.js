import React from 'react'
import { GlobalStyle } from './globalStyles';
import {OverflowHidden} from './index';
import AdminPage from './components/Admin';
import AdminNavBar from './components/AdminNavbar'
import Footer from './components/FooterAdmin';

const adminlogin = () => {
    return (
        <OverflowHidden>
            <GlobalStyle />
            <AdminNavBar />
            <AdminPage />
            <Footer/>
        </OverflowHidden>
    )
}

export default adminlogin
