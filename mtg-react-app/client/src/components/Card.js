import React from 'react';

const Card = props => <div>
    <ul>
        <div className="mtg-card">
            <li id="mtg-card-name" onClick={(e) => props.handleAddCard(e)} cardid={props.cardId}>{props.name}</li>
            <li id="mtg-card-manaCost">{props.manaCost}</li>
            <li id="mtg-card-text">{props.text}</li>
        </div>
        
    </ul>
</div>

export default Card;
        
