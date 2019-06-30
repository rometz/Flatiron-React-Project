import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from "react-router-dom";

const Header = props => { 
    return(
        <Navbar sticky="top">
            <Nav>
                <Link to="/">Home</Link>||
                <Link to="/about">About</Link>||
                <Link to="/deck/">Your Deck</Link>||
                <Link to="/drafter/">Draft</Link>||
            </Nav>
        </Navbar>
    )
}
export default Header;