import React from 'react'
import { GlobalStyle } from './globalStyles';
import {OverflowHidden} from './index';
import HistoryPage from './components/History';
import HistoryHero from './components/SmallHero'
import Footer from './components/Footer';

const History = () => {
    return (
        <OverflowHidden>
            <GlobalStyle />
            <HistoryHero Header={`Order History`}/>
            <HistoryPage />
            <Footer />
        </OverflowHidden>
    )
}

export default History
