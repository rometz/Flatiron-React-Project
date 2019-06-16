import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CardsContainer from '../containers/CardContainer';
import DeckContainer from '../containers/DeckContainer';
import Header from '../components/routes/Header';
import Footer from '../components/routes/Footer';

function AppRouter() { 

    return (
        <Router>
            <Header />

            <div>
                <Link to="/deck/">Your Deck</Link>
                <Link to="/drafter/">Draft</Link>
            </div>

            <Footer />

            <Route path='/drafter/' exact component={CardsContainer} />
            <Route path='/deck/' exact component={DeckContainer} />
        </Router>
    )   
}


export default AppRouter;
