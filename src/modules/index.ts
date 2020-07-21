import { combineReducers } from 'redux';
import stage from './stage'
import noti from './noti'
import objective from './objective'
import plan from './plan'
import modal from './modal'

const rootReducer = combineReducers({
    stage,
    noti,
    objective,
    plan,
    modal
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;