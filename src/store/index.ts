import { combineReducers } from 'redux';
import stage from './stage'
import noti from './noti'
import modal from './modal'
import data from './data'
import subject from './subject'
import sign from './sign'

const rootReducer = combineReducers({
    stage,
    noti,
    modal,
    data,
    subject,
    sign
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;