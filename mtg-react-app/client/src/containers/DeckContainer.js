import React, { Component } from 'react';
import Deck from '../components/decks/Deck';
import DeckInput from '../components/decks/DeckInput';
import { connect } from 'react-redux';

class DeckContainer extends Component {

    render() {
        return (
            <div>
                <DeckInput addDeck={this.props.addDeck} /> 
                <Deck cards={this.props.cards} currentDeck={this.props.decks} />
            </div>     
        )
    }
}

const mapStateToProps = state => {
    return {
        decks: state.decks.JSON,
        cards: state.cards
    }
}

const mapDispatchToProps = dispatch => ({
    fetchDeck: text => dispatch({type: "FETCH_DECK", text})
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckContainer);