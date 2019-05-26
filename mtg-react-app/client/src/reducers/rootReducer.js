import draftingReducer from './draftingReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    drafts: draftingReducer
})

export default rootReducer;