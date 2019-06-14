export function createCard(event, name) {
    return async dispatch => {
        const response = await fetch('cardData', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({event, name})
        });
        const payload = await response.json();
        dispatch({ type: "CREATE_CARD", payload });
    };
};

export function deleteCards() {
    return async dispatch => {
        const response = await fetch('/api/cards/', {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        const payload = await response.json();
        dispatch({ type: "DELETE_CARDS", payload });
    };
};

/* fetch a certain card from the deck, added later
export function fetchDeck() {
    return async (dispatch) => {
        dispatch({type: "LOADING_DECK"});
        const targetUrl = '/api/decks/';
        const response = await fetch(targetUrl);
        const set = await response.json()[0];
        return dispatch({
            type: 'FETCH_DECK', payload: set
        });
    };
};
*/