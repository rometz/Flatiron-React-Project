import React, { Component } from 'react';
import Cards from '../components/Cards/Cards';
import { connect } from 'react-redux';

class CardsContainer extends Component {
    state = {
        cardData: []
    }

    render() {
        return (
            <div>
                <Cards />
            </div>
        )   
    } 
}

const mapStateToProps = state => {
    return {
        cards: state.cards
    }
}

const mapDispatchToProps = dispatch => ({
    createCard: text => dispatch({type: "CREATE_CARE", text}),
    fetchCard: text => dispatch({type: "FETCH_CARD", text})
})

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);