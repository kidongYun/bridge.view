import { combineReducers } from 'redux';
import stage from './stage'
import noti from './noti'
import handle from './handle'
import data from './data'
import sign from './sign'
import cell from './cell'
import templateReducer from '../data/reducers/templateReducer'
import objectives from '../data/actions/objectivesAction'

const rootReducer = combineReducers({
    stage,
    noti,
    handle,
    sign,
    data,
    cell,
    templateReducer,
    objectives
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;