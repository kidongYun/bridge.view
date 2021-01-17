import { createAsyncAction } from 'typesafe-actions';
import { AxiosError, AxiosResponse } from 'axios'

export const SIGN_IN_ACTION = 'SIGN_IN_ACTION' as const
export const SIGN_IN_SUCCESS_ACTION = 'SIGN_IN_SUCCESS_ACTION' as const
export const SIGN_IN_ERROR_ACTION = 'SIGN_IN_ERROR_ACTION' as const

export const SIGN_UP_ACTION = 'SIGN_UP_ACTION' as const
export const SIGN_UP_SUCCESS_ACTION = 'SIGN_UP_SUCCESS_ACTION' as const
export const SIGN_UP_ERROR_ACTION = 'SIGN_UP_ERROR_ACTION' as const

export const SIGN_ACTION = 'SIGN_ACTION' as const;
export const SIGN_SUCCESS_ACTION = 'SIGN_SUCCESS_ACTION' as const;
export const SIGN_ERROR_ACTION = 'SIGN_ERROR_ACTION' as const;

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

export const signUpAction = () => ({
    type: SIGN_UP_ACTION
})

export const signUpSuccessAction = (response: AxiosResponse) => ({
    type: SIGN_UP_SUCCESS_ACTION,
    payload: response
})

export const signUpErrorAction = (error: AxiosError) => ({
    type: SIGN_UP_ERROR_ACTION,
    payload: error
})

export const signAction = () => ({
    type: SIGN_ACTION  
})

export const signSuccessAction = (response: AxiosResponse) => ({
    type: SIGN_SUCCESS_ACTION,
    payload: response
})

export const signErrorAction = (error: AxiosError) => ({
    type: SIGN_ERROR_ACTION,
    payload: error
})

export const signInAsyncAction = createAsyncAction(
    SIGN_IN_ACTION,
    SIGN_IN_SUCCESS_ACTION,
    SIGN_IN_ERROR_ACTION
)<{ email: string, password: string }, AxiosResponse, AxiosError>();

export const signUpAsyncAction = createAsyncAction(
    SIGN_UP_ACTION,
    SIGN_UP_SUCCESS_ACTION,
    SIGN_UP_ERROR_ACTION
)<undefined, AxiosResponse, AxiosError>();

export const signAsyncAction = createAsyncAction(
    SIGN_ACTION,
    SIGN_SUCCESS_ACTION,
    SIGN_ERROR_ACTION
)<undefined, AxiosResponse, AxiosError>();