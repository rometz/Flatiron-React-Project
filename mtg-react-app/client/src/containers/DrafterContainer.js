import React, { Component } from 'react';
import DeckContainer from './DeckContainer';
import { fetchBooster } from '../actions/DraftActions';
import { connect } from 'react-redux';

class DrafterContainer extends Component {

    componentDidMount() {
        this.props.fetchBooster();
    };

    render() {
        return (
            <div>
                <h1>Draft Your Deck</h1>
                <DeckContainer />
            </div>
        )
    }
}

const mapStateToProps = ({ drafts }) => ({ drafts });

export default connect(mapStateToProps, { fetchBooster })(DrafterContainer);