import React, { Component } from 'react';
import DeckContainer from './DeckContainer';
import BoosterContainer from './BoosterContainer';
import { connect } from 'react-redux';
import { fetchBoosters } from '../actions/DraftActions';
import CardsContainer from './CardContainer';

class DrafterContainer extends Component {
    state = {
        deckSize: 0,
        deck: []
    }

    componentDidMount() {
        this.props.fetchBoosters();
    }

    render() {
        return (
            <div>
                <CardsContainer />
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


export default connect(mapStateToProps, { fetchBoosters })(DrafterContainer);