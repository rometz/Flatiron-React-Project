import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CardsContainer from '../containers/CardContainer';
import DeckContainer from '../containers/DeckContainer';
/* home, about, header, footer, */

function AppRouter() { 

    return (
        <Router>
            <nav>
                <Link to="/deck/">Your Deck</Link><br></br>
                <Link to="/drafter/">Draft</Link>
            </nav>

            <Route path='/drafter/' exact component={CardsContainer} />
            <Route path='/deck/' exact component={DeckContainer} />
        </Router>
    )   
}


export default AppRouter;
