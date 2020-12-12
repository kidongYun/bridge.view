import { createReducer } from 'typesafe-actions'
import { PlansAction } from './type'
import { GET_PLANS_ACTION, GET_PLANS_SUCCESS_ACTION, GET_PLANS_ERROR_ACTION } from './action'
import Response from '../stores/response';
import Cell from '../stores/cell'

const plans = createReducer<Response<Cell[]>, PlansAction>(new Response(), {
    [GET_PLANS_ACTION]: state => ({
        ...state,
        status: undefined,
        body: undefined
    }),
    [GET_PLANS_SUCCESS_ACTION]: (state, action) => ({
        ...state,
        status: action.payload.status,
        body: action.payload.data
    }),
    [GET_PLANS_ERROR_ACTION]: (state, action) => ({
        ...state,
        status: action.payload.response!.status,
        body: action.payload.response!.data
    })
});

export default plans;