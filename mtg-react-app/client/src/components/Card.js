import React from 'react';

const Card = props => <div>
    <ul>
        <div onClick={() => props.handleAddCard}>
            <li>{props.name}</li>
            <li>{props.manaCost}</li>
            <li>{props.text}</li>
        </div>
        
    </ul>
</div>

export default Card;
        
