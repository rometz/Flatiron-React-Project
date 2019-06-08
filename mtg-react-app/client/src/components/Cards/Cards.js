import React, { Component } from 'react';
import Card from './Card';

class Cards extends Component {

    renderCards = () => {
        console.log(this.props)
        return this.props.cards.map(
            idvCard => <Card key={idvCard.id} idvCard={idvCard.name} text={idvCard.text} manaCost={idvCard.manaCost} />
        )
    }

    handleAddCard() {
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

export default Cards;