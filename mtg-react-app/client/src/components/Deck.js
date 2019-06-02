import React, { Component } from 'react';
import Booster from './Booster';
import CardMapper from './Cards';

class Deck extends Component {

    render() {
        return (
            <div>             
                <Booster />
                <CardMapper />
            </div>     
        )
    }
}



export default Deck;