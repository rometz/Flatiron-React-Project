import React, { Component } from 'react';
import Card from '../components/Card';
import { connect } from 'react-redux';

class CardsContainer extends Component {
    constructor(props){
        super(props);
        this.renderCardsProps = this.renderCardsProps.bind(this)
        this.state = {
            cards: []
        }
    }

    handleAddCard() {
        this.props.addCard(this.state.cardData)
    }

    renderCardsProps() {
        console.log(this.props.draftObjects);
        const cardProps = this.props.draftObjects.draftingData;
        console.log(cardProps);
        return cardProps.map(
            idvCard => <Card key={idvCard.id} name={idvCard.name} text={idvCard.text} manaCost={idvCard.manaCost} />
        )
    }

    render() {
        return (
            <div>
                {this.renderCardsProps()}
            </div>
        )   
    } 
}

const mapStateToProps = state => {
    return {
        draftObjects: state.drafts
    }
}

const mapDispatchToProps = dispatch => ({
    createCard: text => dispatch({type: "CREATE_CARD", text}),
    fetchCard: text => dispatch({type: "FETCH_CARD", text})
})

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);