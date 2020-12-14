import { createReducer } from 'typesafe-actions'
import { ObjectivesAction } from './type'
import { GET_OBJECTIVES_ACTION, GET_OBJECTIVES_SUCCESS_ACTION, GET_OBJECTIVES_ERROR_ACTION, POST_OBJECTIVES_ACTION, POST_OBJECTIVES_SUCCESS_ACTION, POST_OBJECTIVES_ERROR_ACTION } from './action'
import Response from '../stores/response';
import Cell from '../stores/cell'

const objectives = createReducer<Response<Cell[]>, ObjectivesAction>(new Response(), {
    [GET_OBJECTIVES_ACTION]: state => ({
        ...state,
        status: undefined
    }),
    [GET_OBJECTIVES_SUCCESS_ACTION]: (state, action) => ({
        ...state,
        status: action.payload.status,
        body: action.payload.data
    }),
    [GET_OBJECTIVES_ERROR_ACTION]: (state, action) => ({
        ...state,
        status: action.payload.response!.status
    }),
    [POST_OBJECTIVES_ACTION]: state => ({
        ...state,
        status: undefined,
    }),
    [POST_OBJECTIVES_SUCCESS_ACTION]: (state, action) => ({
        ...state,
        status: action.payload.status,
        body: action.payload.data
    }),
    [POST_OBJECTIVES_ERROR_ACTION]: (state, action) => ({
        ...state,
        status: action.payload.response!.status
    })
});

export default objectives;