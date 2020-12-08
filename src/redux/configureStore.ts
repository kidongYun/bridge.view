import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'

import cell from '../redux/actions/cellAction'
import plans from '../redux/actions/plansAction'
import todos from '../redux/actions/todosAction'
import window from '../redux/actions/pageAction'
import noti from '../redux/actions/notiAction'
import objectives from './objectives/reducers'

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