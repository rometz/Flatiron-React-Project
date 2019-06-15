import React from 'react';

const Deck = props => {

    return (
        <div className="mtg-card">
            <p id="mtg-deck-card" key={props.key}>{props.name}</p>
        </div>
    )
}

export default Deck;