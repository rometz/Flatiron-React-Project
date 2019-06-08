import React, { Component } from 'react';
import CardContainer from './CardContainer';
import { connect } from 'react-redux';

class DeckContainer extends Component {

    render() {
        return (
            <div>             
                <CardContainer />
            </div>     
        )
    }
}

// mapdispatchtoprops
// create a deck

const mapStateToProps = state => {
    return {
        decks: state.decks,
        cards: state.cards
    }
}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps)(DeckContainer);