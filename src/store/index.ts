import { combineReducers } from 'redux';
import stage from './stage'
import handle from './handle'
import data from './data'
import sign from './sign'
import cell from '../redux/actions/cellAction'
import objectives from '../redux/actions/objectivesAction'
import plans from '../redux/actions/plansAction'
import todos from '../redux/actions/todosAction'
import window from '../redux/actions/pageAction'
import noti from '../redux/actions/notiAction'

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