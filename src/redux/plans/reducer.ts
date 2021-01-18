import { createReducer } from 'typesafe-actions'
import { PlansAction } from './type'
import { PLANS_REQ_ACTION, PLANS_SUCCESS_ACTION, PLANS_ERROR_ACTION } from './action'
import Response from '../stores/response';
import Plan from '../stores/plan'

const plans = createReducer<Response<Plan[]>, PlansAction>(new Response(), {
    [PLANS_REQ_ACTION]: state => ({
        ...state,
        status: undefined
    }),
    [PLANS_SUCCESS_ACTION]: (state, action) => ({
        ...state,
        status: action.payload.status,
        body: action.payload.data
    }),
    [PLANS_ERROR_ACTION]: (state, action) => {
        if(action.payload.response === undefined) {
            return {
                ...state,
                status: undefined,
                body: action.payload.message
            }
        }

        return {
            ...state,
            status: action.payload.response.status,
            body: action.payload.response.data
        }
    }
});

export default plans;