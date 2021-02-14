

import objectives from './objectives/reducer'
import plans from './plans/reducer'
import todos from './todos/reducer'
import cell from './cell/reducer'
import page from './page/reducer'
import noti from './noti/reducer'
import sign from './sign/reducer'

const rootReducer = combineReducers({
    objectives,
    plans,
    todos,
    cell,
    page,
    noti,
    sign
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;