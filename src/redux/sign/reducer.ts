import { createReducer } from 'typesafe-actions'
import { SignState, SignAction } from './type'
import { SIGN_IN_ACTION, SIGN_IN_SUCCESS_ACTION, SIGN_IN_ERROR_ACTION, SIGN_UP_ACTION, SIGN_UP_SUCCESS_ACTION, SIGN_UP_ERROR_ACTION } from './action'

const initialState: SignState = {
    response: {
        loading: false,
        data: null
    }
};

const sign = createReducer<SignState, SignAction>(initialState, {
    [SIGN_IN_ACTION]: state => ({
        ...state,
        response: {
            loading: true,
            data: null
        }
    }),
    [SIGN_IN_SUCCESS_ACTION]: (state, action) => ({
        ...state,
        response: {
            loading: false,
            data: action.payload
        }
    }),
    [SIGN_IN_ERROR_ACTION]: (state, action) => ({
        ...state,
        response: {
            loading: false,
            data: action.payload
        }
    }),
    [SIGN_UP_ACTION]: state => ({
        ...state,
        response: {
            loading: true,
            data: null
        }
    }),
    [SIGN_UP_SUCCESS_ACTION]: (state, action) => ({
        ...state,
        response: {
            loading: false,
            data: action.payload
        }
    }),
    [SIGN_UP_ERROR_ACTION]: (state, action) => ({
        ...state,
        response: {
            loading: false,
            data: action.payload
        }
    })
});

export default sign;