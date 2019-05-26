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

}

export function deleteDeck(deckId) {
    
}