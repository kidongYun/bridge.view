import { combineReducers } from 'redux';
import stage from './stage'
import noti from './noti'
import handle from './handle'
import data from './data'
import subject from './subject'
import sign from './sign'
import objective from './objective'
import cell from './cell'

const rootReducer = combineReducers({
    stage,
    noti,
    handle,
    data,
    subject,
    sign,
    objective,
    cell
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;