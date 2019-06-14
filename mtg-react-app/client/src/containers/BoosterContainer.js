import React, { Component } from 'react';
import CardsContainer from './CardContainer';
import { fetchBooster } from '../actions/DraftActions';
import { connect } from 'react-redux';

class BoosterContainer extends Component {
  
    handleFetchBooster() {
        this.props.fetchBooster();    
    };

    render() {
        return (
            <div>
                <button onClick={() => this.handleFetchBooster()}>Open a Pack</button>
                <CardsContainer handleFetchBooster={() => this.handleFetchBooster()}/>
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