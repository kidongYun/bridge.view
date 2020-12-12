import { createStandardAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError, AxiosResponse } from 'axios'
import Sign from '../stores/sign'

export const SIGN_IN_ACTION = 'SIGN_IN_ACTION' as const
export const SIGN_IN_SUCCESS_ACTION = 'SIGN_IN_SUCCESS_ACTION' as const
export const SIGN_IN_ERROR_ACTION = 'SIGN_IN_ERROR_ACTION' as const

export const SIGN_UP_ACTION = 'SIGN_UP_ACTION' as const
export const SIGN_UP_SUCCESS_ACTION = 'SIGN_UP_SUCCESS_ACTION' as const
export const SIGN_UP_ERROR_ACTION = 'SIGN_UP_ERROR_ACTION' as const

export const signInAction = (email: string, password: string) => ({
    type: SIGN_IN_ACTION,
    payload: { email, password }
})

export const signInSuccessAction = (response: AxiosResponse) => ({
    type: SIGN_IN_SUCCESS_ACTION,
    payload: response
})

export const signInErrorAction = (error: AxiosError) => ({
    type: SIGN_IN_ERROR_ACTION,
    payload: error
})

// export const signInAction = createStandardAction(SIGN_IN_ACTION)();
// export const signInSuccessAction = createStandardAction(SIGN_IN_SUCCESS_ACTION)<Sign>();
// export const signInErrorAction = createStandardAction(SIGN_IN_ERROR_ACTION)<AxiosError>();

// export const signUpAction = createStandardAction(SIGN_UP_ACTION)();
// export const signUpSuccessAction = createStandardAction(SIGN_UP_SUCCESS_ACTION)<Sign>();
// export const signUpErrorAction = createStandardAction(SIGN_UP_ERROR_ACTION)<AxiosError>();

export const signInAsyncAction = createAsyncAction(
    SIGN_IN_ACTION,
    SIGN_IN_SUCCESS_ACTION,
    SIGN_IN_ERROR_ACTION
)<{ email: string, password: string }, AxiosResponse, AxiosError>();

// export const signUpAsyncAction = createAsyncAction(
//     SIGN_UP_ACTION,
//     SIGN_UP_SUCCESS_ACTION,
//     SIGN_UP_ERROR_ACTION
// )<undefined, Sign, AxiosError>();