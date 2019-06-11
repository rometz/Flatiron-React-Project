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
        this.setState({
            cards: [...this.state.cards, packState]
        });
        console.log(packState);
        console.log(packPromise);
        console.log(this.state)
           
    };

    render() {
        return (
            <div>
                <button onClick={() => this.handleFetchBooster()}>Open a Pack</button>
                <CardsContainer cardObjects={this.state.cards} />
            </div>
            
        )
    }

}

const mapStateToProps = state => {
    return {
        draftObjects: state.drafts
    }
}

export default connect(mapStateToProps, {fetchBooster})(BoosterContainer);