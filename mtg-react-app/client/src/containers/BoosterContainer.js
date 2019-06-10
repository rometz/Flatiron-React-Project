import React, { Component } from 'react';
import CardsContainer from './CardContainer';
import { fetchBooster } from '../actions/DraftActions';
import { connect } from 'react-redux';

class BoosterContainer extends Component {
    constructor() {
        super();
        this.state = {
            cards: []
        }
    }

    handleFetchBooster() {
       // e.preventPropagation();
        const pack = [];
        this.props.fetchBooster();
        const packPromise = this.props.draftObjects.draftingData;
        const packState = [...pack, packPromise];
        console.log(packState);
        console.log(packPromise);
        console.log(this.state)
           
    };

    render() {
        return (
            <div>
                <button onClick={() => this.handleFetchBooster()}>Open a Pack</button>
                <CardsContainer cardObjects={this.props.cardObjects} />
            </div>
            
        )
    }

}

const mapStateToProps = state => {
    return {
        cardObjects: state.cards,
        draftObjects: state.drafts
    }
}

export default connect(mapStateToProps, {fetchBooster})(BoosterContainer);