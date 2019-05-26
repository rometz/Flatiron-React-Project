function draftingReducer(state = {
    loading: false,
    draftingData: []
}, action) {
    switch (action.type) {
        case "LOADING_BOOSTER":
            return {...state, loading: true, draftingData: [], }
        
        case "FETCH_CARDS":
            return {...state, loading: false, draftingData: action.payload}

        default:
            return state
    };
};

export default draftingReducer;