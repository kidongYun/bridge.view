import { createReducer } from 'typesafe-actions'
import { TodosAction } from './type'
import { GET_TODOS_ACTION, GET_TODOS_SUCCESS_ACTION, GET_TODOS_ERROR_ACTION } from './action'
import Response from '../stores/response'
import Cell from '../stores/cell'

const todos = createReducer<Response<Cell[]>, TodosAction>(new Response(), {
    [GET_TODOS_ACTION]: state => ({
        ...state,
        status: undefined,
        body: undefined
    }),
    [GET_TODOS_SUCCESS_ACTION]: (state, action) => ({
        ...state,
        status: action.payload.status,
        body: action.payload.data
    }),
    [GET_TODOS_ERROR_ACTION]: (state, action) => ({
        ...state,
        status: action.payload.response!.status,
        body: action.payload.response!.data
    })
});

export default todos;