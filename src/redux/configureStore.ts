import { combineReducers } from 'redux';

import window from '../redux/actions/pageAction'
import noti from '../redux/actions/notiAction'

import objectives from './objectives/reducer'
import plans from './plans/reducer'
import todos from './todos/reducer'
import cell from './cell/reducer'

const rootReducer = combineReducers({
    cell,
    objectives,
    plans,
    todos,
    window,
    noti
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;