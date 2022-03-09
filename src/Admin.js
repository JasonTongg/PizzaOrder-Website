import React from 'react'
import { GlobalStyle } from './globalStyles';
import {OverflowHidden} from './index';
import AdminPage from './components/Admin';

const adminlogin = () => {
    return (
        <OverflowHidden>
            <GlobalStyle />
            <AdminPage />
        </OverflowHidden>
    )
}

export default adminlogin
