import React from 'react';

const CardMapper = props =>{
    const Card = (props.card && props.cards.map())

    return (
        <div>
            {Card}
        </div>
    )    
}

export default CardMapper;