import { createReducer } from 'typesafe-actions'
import { SignState, SignAction } from './type'
import { SIGN_IN_ACTION, SIGN_IN_SUCCESS_ACTION, SIGN_IN_ERROR_ACTION, SIGN_UP_ACTION, SIGN_UP_SUCCESS_ACTION, SIGN_UP_ERROR_ACTION } from './action'
import Sign from '../stores/sign';
import Response from '../stores/response';

// const initialState: SignState = {
//     response: {
//         data: null
//     }
// };

const sign = createReducer<Response<Sign>, SignAction>(new Response(), {
    [SIGN_IN_ACTION]: (state, action) => ({
        status: undefined,
        body: {
            email : action.payload.email,
            password : action.payload.password
        }
    }),
    [SIGN_IN_SUCCESS_ACTION]: (state, action) => ({
        ...state,
        status: action.payload.status
    }),
    [SIGN_IN_ERROR_ACTION]: (state, action) => ({
        ...state,
        status: action.payload.response?.status!,
        body: action.payload.response?.data
    })
    // [SIGN_UP_ACTION]: state => ({
    //     ...state,
    //     response: {
    //         loading: true,
    //         data: null
    //     }
    // }),
    // [SIGN_UP_SUCCESS_ACTION]: (state, action) => ({
    //     ...state,
    //     response: {
    //         loading: false,
    //         data: action.payload
    //     }
    // }),
    // [SIGN_UP_ERROR_ACTION]: (state, action) => ({
    //     ...state,
    //     response: {
    //         loading: false,
    //         data: action.payload
    //     }
    // })
});

export default sign;