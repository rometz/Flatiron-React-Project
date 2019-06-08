import React from 'react';

const Deck = props => {
    const deck = props.currentDeck

    return (
        <div>
            {deck}
        </div>
    )
}

export default Deck;