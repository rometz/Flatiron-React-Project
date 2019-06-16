import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './About';
import AppRouter from '../../router/AppRouter';

const Header = 
    <div class="header">
            <Router>
                <h4 class='header-item link'><Link to="/about">About</Link></h4>
                <h4 class='header-item link'><Link to="/">Home</Link></h4>   

                <Route path="/about" exact component={About} />
                <Route path="/" exact component={AppRouter} />
            </Router>
    </div>

export default Header;