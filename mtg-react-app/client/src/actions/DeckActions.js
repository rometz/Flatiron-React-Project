export function fetchDeck() {
    return async (dispatch) => {
        dispatch({type: "LOADING_DECK"});
        const targetUrl = '/api/decks/';
        const response = await fetch(targetUrl);
        const set = await response.json();
        return dispatch({
            type: 'FETCH_DECK', payload: set
        });
    };
};

export function createDeck(name) {
    return async dispatch => {
        const response = await fetch('deckData', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name })
        });
        const payload = await response.json();
        dispatch({ type: "CREATE_DECK", payload });
    };
};

export function deleteDeck(deckId) {
    return async dispatch => {
        const response = await fetch(`/api/deck/${deckId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        });
        const payload = await response.json();
        dispatch({ type: "DELETE_DECK", payload });
    };
};