import { combineReducers } from 'redux';
import stage from './stage'
import noti from './noti'
import handle from './handle'
import data from './data'
import sign from './sign'
import cell from '../data/actions/cellAction'
import objectives from '../data/actions/objectivesAction'
import plans from '../data/actions/plansAction'
import todos from '../data/actions/todosAction'
import window from '../data/actions/pageAction'

const rootReducer = combineReducers({
    stage,
    noti,
    handle,
    sign,
    data,
    cell,
    objectives,
    plans,
    todos,
    window
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;