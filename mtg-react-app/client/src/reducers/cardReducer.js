function cardReducer(state = {
    loading: false,
    cardData: []
}, action) {
    switch (action.type) {
        
        case "LOADING_CARD":
            return {...state, loading: true, cardData: []}

        case "FETCH_CARD":
            return {...state, loading: false, cardData: action.payload}

        case "CREATE_CARD":
            return {...state, cardData: [...state.cardData, action.payload]}

        case "DELETE_CARDS":
            return {...state, loading: false, cardData: state.cardData.filter(
                card => card.id !== action.payload.id
            )}

        default:
            return state
    }
}

export default cardReducer;