import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Cards from '../components/Cards';
import Deck from '../components/Deck';
import Drafter from '../container/Drafter';
/* home, about, header, footer, drafter?? */

function AppRouter() {
    return (
        <Router>
            <nav>
                <Link to="/cards/">Cards</Link>
                <Link to="/decks/">Deck</Link>
            </nav>

            <Route path='/drafter/' exact component={DrafterContainer} />
            <Route path='/cards/' exact component={CardsComponent} />
            <Route path='/decks/' exact component={DeckComponent} />
        </Router>
    )
}

export default AppRouter;
