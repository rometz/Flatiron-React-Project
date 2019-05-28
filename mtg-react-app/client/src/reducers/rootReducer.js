import draftingReducer from './draftingReducer';
import deckReducer from './deckReducer';
import cardReducer from './cardReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    drafts: draftingReducer,
    decks: deckReducer,
    cards: cardReducer
})

export default rootReducer;