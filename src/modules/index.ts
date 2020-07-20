import { combineReducers } from 'redux';
import stage from './stage'
import modal from './modal'
import noti from './noti'
import objective from './objective'
import plan from './plan'

const rootReducer = combineReducers({
    stage,
    modal,
    noti,
    objective,
    plan
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;