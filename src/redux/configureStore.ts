import { combineReducers } from 'redux';

import objectives from './objectives/reducer'
import plans from './plans/reducer'
import todos from './todos/reducer'
import cell from './cell/reducer'
import page from './page/reducer'
import noti from './noti/reducer'

const rootReducer = combineReducers({
    objectives,
    plans,
    todos,
    cell,
    page,
    noti
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;