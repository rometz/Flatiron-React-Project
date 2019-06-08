import React, { Component } from 'react';


class Card extends Component {


    render () {
        const { idvCard } = this.props;

        return (
            <div>
                <ul>
                    <div onClick={() => this.props.handleAddCard}>
                        <li>{idvCard.name}</li>
                        <li>{idvCard.manaCost}</li>
                        <li>{idvCard.text}</li>
                    </div>
                    
                </ul>
            </div>
        )
    }
}
export default Card;
        
