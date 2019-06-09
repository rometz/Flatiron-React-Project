import React from 'react';

const Deck = props => {
    // deck is undefined 060819
    console.log(props.currentDeck)
    const deck = props.currentDeck

    return (
        <div>
            {deck}
        </div>
    )
}

export default Deck;