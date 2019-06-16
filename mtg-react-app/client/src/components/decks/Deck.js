import React from 'react';

const Deck = props => {

    return (
        <div className="mtg-card">
            <p id="mtg-deck-card" keyid={props.key}>{props.name}</p>
        </div>
    )
}

export default Deck;