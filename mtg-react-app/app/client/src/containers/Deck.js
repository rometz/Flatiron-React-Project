import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoosterPack from './BoosterPack';

class Deck extends Component {
    state = {
        amount: 0,
        cards: '',
        boosterPack: ''
    }

    handlePacks = props => {
        const packCards = props.fetchBooster()
    }

    render() {
        return (
            <BoosterPack />
        )
    }
}

const mapStateToProps = ({ }) => ({ });

export default connect()(Deck);