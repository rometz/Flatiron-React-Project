import React, { Component } from 'react';
import DeckContainer from './DeckContainer';
import BoosterContainer from './BoosterContainer';
import { connect } from 'react-redux';
import { fetchBooster } from '../actions/DraftActions';

class DrafterContainer extends Component {
    state = {
        deckSize: 0,
        deck: []
    }

    render() {
        return (
            <div>
                <DeckContainer />
                <BoosterContainer />
            </div>
        )
    }
}

// simplify mapDispatchToProps
// move to a presentational/rendering component Drafter.js in components

const mapStateToProps = state => {
    console.log(state);
    return {
        decks: state.decks,
        drafts: state.drafts,
        cards: state.cards
    }
}


export default connect(mapStateToProps, { fetchBooster })(DrafterContainer);