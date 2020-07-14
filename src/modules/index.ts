import { combineReducers } from 'redux';
import stage from './stage'
import modal from './modal'

const rootReducer = combineReducers({
    stage,
    modal
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;