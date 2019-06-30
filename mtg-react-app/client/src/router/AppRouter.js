import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CardsContainer from '../containers/CardContainer';
import DeckContainer from '../containers/DeckContainer';
import Header from '../components/routes/Header';
import Footer from '../components/routes/Footer';
import About from '../components/routes/About';

function AppRouter() { 

    return (
        <Router>
            <div className="App App-Body">
                <Header />
                <br />
            
                <Route path='/drafter' exact component={CardsContainer} />
                <Route path='/deck' exact component={DeckContainer} />
                <Route path='/about' exact component={About} />
            </div>
            <Footer />
        </Router>
    )   
}


export default AppRouter;