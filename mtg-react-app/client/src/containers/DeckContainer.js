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
        decks: state.decks,
        cards: state.cards
    }
}

const mapDispatchToProps = dispatch => ({
    fetchDeck: id => dispatch({type: "FETCH_DECK", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(DeckContainer);