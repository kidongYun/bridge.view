import { createAsyncAction } from 'typesafe-actions';
import { AxiosError, AxiosResponse } from 'axios'

export const GET_PLANS_ACTION = 'GET_PLANS_ACTION' as const
export const GET_PLANS_SUCCESS_ACTION = 'GET_PLANS_SUCCESS_ACTION' as const
export const GET_PLANS_ERROR_ACTION = 'GET_PLANS_ERROR_ACTION' as const

export const getPlansAction = () => ({
    type: GET_PLANS_ACTION
})

export const getPlansSuccessAction = (response: AxiosResponse) => ({
    type: GET_PLANS_SUCCESS_ACTION,
    payload: response
})

export const getPlansErrorAction = (error: AxiosError) => ({
    type: GET_PLANS_ERROR_ACTION,
    payload: error
})

export const getPlansAsyncAction = createAsyncAction(
    GET_PLANS_ACTION,
    GET_PLANS_SUCCESS_ACTION,
    GET_PLANS_ERROR_ACTION
)<undefined, AxiosResponse, AxiosError>();