export function fetchBooster() {
    return async (dispatch) => {
        dispatch({type: "LOADING_BOOSTER"});
        const response = await fetch(`https://api.magicthegathering.io/v1/sets/WAR/booster`);
        const set = await response.json();
        return dispatch({
            type: 'FETCH_CARDS', payload: set
        });
    }
}

