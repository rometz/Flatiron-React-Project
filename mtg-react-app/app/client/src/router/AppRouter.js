import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DrafterContainer from '../containers/DrafterContainer';
/* home, about, header, footer, */

function AppRouter() {
    return (
        <Router>
            <nav>
                <Link to="/drafter/">Draft</Link>
            </nav>

            <Route path='/drafter/' exact component={DrafterContainer} />
        </Router>
    )
}

export default AppRouter;
