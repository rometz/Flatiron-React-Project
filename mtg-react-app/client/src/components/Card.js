import React from 'react';

const { idvCard } = this.props;

const Card = props => <div>
    <ul>
        <div onClick={(event) => this.props.handleAddCard}>
            <li>{idvCard.name}</li>
            <li>{idvCard.manaCost}</li>
            <li>{idvCard.text}</li>
        </div>
        
    </ul>
</div>

export default Card;
        
