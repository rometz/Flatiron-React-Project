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
        this.props.grabBooster();
    }

    render() {
        return (
            <div>
                <Deck />
                <Booster />
            </div>
        )
    }
}

const mapStateToProps = ({ decks }) => ({ decks });

const mapDispatchToProps = dispatch => ({
    addDeck: array => dispatch({type: "CREATE_DECK", array}),
    deleteDeck: id => dispatch({type: "DELETE_DECK", id}),
    deleteCards: text => dispatch({type: "DELETE_CARDS", text}),
    grabBooster: text => dispatch({type: "FETCH_CARDS", text})
});

export default connect(mapStateToProps, mapDispatchToProps)(DrafterContainer);