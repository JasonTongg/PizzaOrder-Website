import React from 'react'
import { GlobalStyle } from './globalStyles';
import {OverflowHidden} from './index';
import HistoryPage from './components/History';
import HistoryHero from './components/HistoryHero'
import Footer from './components/Footer';

const History = () => {
    return (
        <OverflowHidden>
            <GlobalStyle />
            <HistoryHero />
            <HistoryPage />
            <Footer />
        </OverflowHidden>
    )
}

export default History
