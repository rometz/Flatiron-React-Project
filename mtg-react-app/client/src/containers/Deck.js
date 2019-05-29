import React, { Component } from 'react';
import { connect } from 'react-redux';
import BoosterPack from './BoosterPack';


class DeckContainer extends Component {
    state = {
        amount: 0,
        cards: '',
        boosterPack: ''
    }

    render() {
        return (
            <div>
                <BoosterPack />
            </div>
            
        )
    }
}

const mapStateToProps = ({ deckData }) => ({ deckData });

const mapDispatchtoProps = dispatch => ({
    addDeck: array => dispatch({type: "CREATE_DECK", array}),
    deleteDeck: id => dispatch({type: "DELETE_DECK", id}),
    deleteCards: text => dispatch({type: "DELETE_CARDS", text})
});

export default connect(mapStateToProps, mapDispatchtoProps)(DeckContainer);