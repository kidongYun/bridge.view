import { combineReducers } from 'redux';
import stage from './stage'
import noti from './noti'
import modal from './modal'
import data from './data'
import cell from './cell'

const rootReducer = combineReducers({
    stage,
    noti,
    modal,
    data,
    cell
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;