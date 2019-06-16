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
            console.log(action)
            if ( action.payload.status === 500) {
                return state
            } else {
                return {...state, cardData: [...state.cardData, action.payload]}
            }
            

        case "DELETE_CARDS":
            console.log(action)
            return {...state, loading: false, cardData: []}

        default:
            return state
    }
}

export default cardReducer;