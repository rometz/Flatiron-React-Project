import React, { Component } from 'react';
import { connect } from 'react-redux';
import Booster from '../components/Booster';
import CardMapper from '../components/Cards';

class DeckContainer extends Component {
    state = {
        amount: 0,
        boosterPack: []
    }

    render() {
        return (
            <div>             
                <Booster />
                <CardMapper />
            </div>     
        )
    }
}

const mapStateToProps = ({ decks }) => ({ decks });

const mapDispatchtoProps = dispatch => ({
    addDeck: array => dispatch({type: "CREATE_DECK", array}),
    deleteDeck: id => dispatch({type: "DELETE_DECK", id}),
    deleteCards: text => dispatch({type: "DELETE_CARDS", text})
});

export default connect(mapStateToProps, mapDispatchtoProps)(DeckContainer);