import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooster } from '../actions/DraftActions';

class Booster extends Component {
    state = {
        cards: []
    }

    componentDidMount() {
        this.props.fetchBooster();
    };

    handleCardChosen() {
        
    }

    render() {
        return (
            <p></p>
        )
    }

}

export default connect({fetchBooster})(Booster);