import React from 'react'
import { GlobalStyle } from './globalStyles';
import {OverflowHidden} from './index';
import AdminLogin from './components/AdminLogin';

const adminlogin = () => {
    return (
        <OverflowHidden>
            <GlobalStyle />
            <AdminLogin />
        </OverflowHidden>
    )
}

export default adminlogin
