import React, { Component } from 'react';
import Card from './Card';

class CardMapper extends Component {
    state = {
        cardData: []
    }

    renderCards = () => {
        return this.props.cards.map(
            idvCard => <Card key={idvCard.id} idvCard={idvCard.name} text={idvCard.text} manaCost={idvCard.manaCost} />
        )
    }

    handleAddCard(event) {
        event.preventDefault();
        this.props.addCard(this.state.cardData)
    }

    render() {
        return (
            <ol>
                {this.renderCards()}
            </ol>
        )   
    } 
}

export default CardMapper;