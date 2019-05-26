import draftingReducer from './draftingReducer';
import { combineReducers } from '../../../../../../../AppData/Local/Microsoft/TypeScript/3.4.5/node_modules/redux';

const rootReducer = combineReducers({
    drafts: draftingReducer
})

export default rootReducer;