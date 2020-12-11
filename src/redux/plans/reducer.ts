import { createReducer } from 'typesafe-actions'
import { PlansState, PlansAction } from './type'
import { GET_PLANS_ACTION, GET_PLANS_SUCCESS_ACTION, GET_PLANS_ERROR_ACTION } from './action'

const initialState: PlansState = {
    response: {
        loading: false,
        data: null
    }
};

const plans = createReducer<PlansState, PlansAction>(initialState, {
    [GET_PLANS_ACTION]: state => ({
        ...state,
        response: {
            loading: true,
            data: null
        }
    }),
    [GET_PLANS_SUCCESS_ACTION]: (state, action) => ({
        ...state,
        response: {
            loading: false,
            data: action.payload
        }
    }),
    [GET_PLANS_ERROR_ACTION]: (state, action) => ({
        ...state,
        response: {
            loading: false,
            data: action.payload
        }
    })
});

export default plans;