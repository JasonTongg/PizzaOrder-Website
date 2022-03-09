import React from 'react'
import { GlobalStyle } from './globalStyles';
import {OverflowHidden} from './index';
import ErrorBody from './components/404Body';

const errpage = () => {
    return (
        <OverflowHidden>
            <GlobalStyle />
            <ErrorBody />
        </OverflowHidden>
    )
}

export default errpage
