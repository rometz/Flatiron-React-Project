import React, { Component } from 'react';
import DeckContainer from './DeckContainer';
import Booster from '../components/Booster';
import { connect } from 'react-redux';

class DrafterContainer extends Component {

    render() {
        return (
            <div>
                <h1>Draft Your Deck</h1>
                <div>
                    <DeckContainer addDeck={this.props.addDeck}/>
                </div>
                <Booster />
            </div>
        )
    }
}

const mapStateToProps = ({ drafts }) => ({ drafts });

const mapDispatchToProps = dispatch => ({
    addDeck: array => dispatch({type: "CREATE_DECK", array})
})

export default connect(mapStateToProps, mapDispatchToProps)(DrafterContainer);