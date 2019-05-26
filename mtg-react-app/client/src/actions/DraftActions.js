export function fetchBooster() {
    return async (dispatch) => {
        dispatch({type: "LOADING_BOOSTER"});
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const targetUrl = 'https://api.magicthegathering.io/v1/sets/WAR/booster';
        const response = await fetch(proxyUrl + targetUrl);
        const set = await response.json();
        return dispatch({
            type: 'FETCH_CARDS', payload: set
        });
    }
}

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

