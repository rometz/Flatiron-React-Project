export function fetchBooster() {
    return (dispatch) => {
        dispatch({type: "LOADING_BOOSTER"});
        return fetch(`https://api.magicthegathering.io/v1/sets/WAR/booster`).then(response => {
            return response.json();
        }).then(set => dispatch({
            type: 'FETCH_CARDS', payload: set
        }))
    }
}

