import React, { Component } from 'react';
import Deck from '../components/Deck';
import Booster from '../components/Booster';
import { connect } from 'react-redux';

class DrafterContainer extends Component {
    state = {
        deckSize: 0,
        boosterPack: [],
        deck: []
    }

    componentDidMount() {
        this.props.addDeck(
            this.state.deck
        );
    }

    getStore

    render() {
        return (
            <div>
                <Deck />
                <Booster boosters={this.props.grabBooster}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        decks: state.decks,
        drafts: state.drafts,
        cards: state.cards
    }
}

const mapDispatchToProps = dispatch => ({
    addDeck: array => dispatch({type: "CREATE_DECK", array}),
    deleteDeck: id => dispatch({type: "DELETE_DECK", id}),
    deleteCards: text => dispatch({type: "DELETE_CARDS", text}),
    grabBooster: object => dispatch({type: "FETCH_CARDS", object})
});

export default connect(mapStateToProps, mapDispatchToProps)(DrafterContainer);