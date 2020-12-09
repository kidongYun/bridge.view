import { createStandardAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios'
import Sign from '../stores/sign'
import Response from '../stores/response'

export const SIGN_IN_ACTION = 'SIGN_IN_ACTION' as const
export const SIGN_IN_SUCCESS_ACTION = 'SIGN_IN_SUCCESS_ACTION' as const
export const SIGN_IN_ERROR_ACTION = 'SIGN_IN_ERROR_ACTION' as const

export const signInAction = createStandardAction(SIGN_IN_ACTION)();
export const signInSuccessAction = createStandardAction(SIGN_IN_SUCCESS_ACTION)<Response<Sign>>();
export const signInErrorAction = createStandardAction(SIGN_IN_ERROR_ACTION)<AxiosError>();

export const signInAsyncAction = createAsyncAction(
    SIGN_IN_ACTION,
    SIGN_IN_SUCCESS_ACTION,
    SIGN_IN_ERROR_ACTION
)<undefined, Response<Sign>, AxiosError>();