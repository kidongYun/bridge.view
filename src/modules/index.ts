import { combineReducers } from 'redux';
import stage from './stage'
import modal from './modal'
import noti from './noti'
import objective from './objective'

const rootReducer = combineReducers({
    stage,
    modal,
    noti,
    objective
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;