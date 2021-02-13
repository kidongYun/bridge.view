import { createReducer } from 'typesafe-actions'
import { SignAction } from './type'
import { SIGN_IN_ACTION, SIGN_IN_SUCCESS_ACTION, SIGN_IN_ERROR_ACTION, SIGN_UP_ACTION, SIGN_UP_SUCCESS_ACTION, SIGN_UP_ERROR_ACTION, SIGN_ACTION, SIGN_SUCCESS_ACTION, SIGN_ERROR_ACTION } from './action'
import Sign from '../stores/sign';
import Response from '../stores/response';

const sign = createReducer<Response<Sign>, SignAction>(new Response(), {
    [SIGN_IN_ACTION]: state => ({
        ...state,
        status: undefined,
        body: undefined
    }),
    [SIGN_IN_SUCCESS_ACTION]: (state, action) => {
        let sign: Sign = new Sign();

        sign.email = action.payload.data.email;
        sign.token = action.payload.data.token;

        return {
            ...state,
            status: action.payload.status,
            body: sign
        }
    },
    [SIGN_IN_ERROR_ACTION]: (state, action) => {
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
    },
    [SIGN_UP_ACTION]: state => ({
        ...state,
        status: undefined,
        body: undefined
    }),
    [SIGN_UP_SUCCESS_ACTION]: (state, action) => ({
        ...state,
        status: action.payload.status,
        body: action.payload.data
    }),
    [SIGN_UP_ERROR_ACTION]: (state, action) => {
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
    },
    [SIGN_ACTION]: state => ({
        ...state,
        status: undefined,
        body: undefined
    }),
    [SIGN_SUCCESS_ACTION]: (state, action) => ({
        ...state,
        status: action.payload.status,
        body: action.payload.data
    }),
    [SIGN_ERROR_ACTION]: (state, action) => {
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

export default sign;