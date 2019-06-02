import React, { Component } from 'react';
import CardMapper from './Cards';
//import { connect } from 'react-redux';

class Booster extends Component {
    state = {
        cards: []
    }

    render() {
        return (
            <CardMapper />
        )
    }

}

export default Booster;