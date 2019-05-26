export function fetchDeck() {
    return async (dispatch) => {
        dispatch({type: "LOADING_DECK"});
        const targetUrl = '/api/decks/';
        const response = await fetch(targetUrl);
        const set = await response.json()[0];
        return dispatch({
            type: 'FETCH_DECK', payload: set
        });
    }
}

export function createDeck(name, size) {
    return async dispatch => {
        const response = await fetch('draftingData', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, size })
        });
        const payload = await response.json();
        dispatch({ type: "CREATE_DECK", payload });
    }
}

export function deleteDeck(deckId) {

}