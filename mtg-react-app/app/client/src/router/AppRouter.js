import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Deck from '../container/Deck';
import Drafter from '../container/Drafter';
/* home, about, header, footer, */

function AppRouter() {
    return (
        <Router>
            <nav>
                <Link to="/cards/">Cards</Link>
                <Link to="/decks/">Deck</Link>
            </nav>

            <Route path='/drafter/' exact component={Drafter} />
            <Route path='/deck/' exact component={Deck} />
        </Router>
    )
}

export default AppRouter;
