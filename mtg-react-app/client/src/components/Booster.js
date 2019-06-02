import React, { Component } from 'react';
import CardMapper from './Cards';
import { fetchBooster } from '../actions/DraftActions';
import { connect } from 'react-redux';

class Booster extends Component {
    state = {
        cards: []
    }

    handleFetchBooster() {
        const pack = this.props.fetchBooster();
        this.setState({
            cards: pack
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.handleFetchBooster()}>Open a Pack</button>
                <CardMapper cardObjects={this.props.cardObjects} />
            </div>
            
        )
    }

}

const mapStateToProps = state => {
    return {cardObjects: state.cards}
}

export default connect(mapStateToProps, {fetchBooster})(Booster);