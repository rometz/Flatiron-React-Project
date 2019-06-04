import React, { Component } from 'react';
import Card from './Card';

class CardMapper extends Component {

    renderCards = () => {
        return this.props.cards.map(
            idvCard => <Card />
        )
    }
    render() {
        return (
            <ul>
                {this.renderCards()}
            </ul>
        )   
    } 
}

export default CardMapper;