import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'

import cell from '../redux/actions/cellAction'
import objectives from '../redux/actions/objectivesAction'
import plans from '../redux/actions/plansAction'
import todos from '../redux/actions/todosAction'
import window from '../redux/actions/pageAction'
import noti from '../redux/actions/notiAction'

const rootReducer = combineReducers({
    cell,
    objectives,
    plans,
    todos,
    window,
    noti
})

export default createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;