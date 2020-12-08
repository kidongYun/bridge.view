import { createReducer } from 'typesafe-actions'
import { TodosState, TodosAction } from './type'
import { GET_TODOS_ACTION, GET_TODOS_SUCCESS_ACTION, GET_TODOS_ERROR_ACTION } from './action'

const initialState: TodosState = {
    response: {
        loading: false,
        error: null,
        data: null
    }
};

const todos = createReducer<TodosState, TodosAction>(initialState, {
    [GET_TODOS_ACTION]: state => ({
        ...state,
        response: {
            loading: true,
            error: null,
            data: null
        }
    }),
    [GET_TODOS_SUCCESS_ACTION]: (state, action) => ({
        ...state,
        response: {
            loading: false,
            error: null,
            data: action.payload
        }
    }),
    [GET_TODOS_ERROR_ACTION]: (state, action) => ({
        ...state,
        response: {
            loading: false,
            error: action.payload,
            data: null
        }
    })
});

export default todos;