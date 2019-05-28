function deckReducer(state = {
    loading: false,
    deckData: []
}, action) {
    switch (action.type) {
        case "LOADING_DECK":
            return {...state, loading: true, deckData: []}

        case "FETCH_DECK":
            return {...state, loading: false, deckData: action.payload}

        case "CREATE_DECK":
            return {...state, deckData: [...state.deckData, action.payload]}

        case "DELETE_DECK":
            return {...state, loading: false, deckData: state.deckData.filter(
                deck => deck.id !== action.payload.id
            )}

        default:
            return state
    }
}

export default deckReducer;