import React, { Component } from 'react';
import Deck from './Deck';
import { connect } from 'react-redux';

class DrafterContainer extends Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <Deck />
            </div>
        )
    }
}

export default DrafterContainer;