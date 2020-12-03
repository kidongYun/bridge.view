import { combineReducers } from 'redux';
import stage from './stage'
import handle from './handle'
import data from './data'
import sign from './sign'
import cell from '../data/actions/cellAction'
import objectives from '../data/actions/objectivesAction'
import plans from '../data/actions/plansAction'
import todos from '../data/actions/todosAction'
import window from '../data/actions/pageAction'
import noti from '../data/actions/notiAction'

const rootReducer = combineReducers({
    stage,
    handle,
    sign,
    data,
    cell,
    objectives,
    plans,
    todos,
    window,
    noti
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;