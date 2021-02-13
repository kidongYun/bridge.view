import { createAsyncAction } from 'typesafe-actions';
import { AxiosError, AxiosResponse } from 'axios'

export const PLANS_REQ_ACTION = 'PLANS_REQ_ACTION' as const
export const PLANS_SUCCESS_ACTION = 'PLANS_SUCCESS_ACTION' as const
export const PLANS_ERROR_ACTION = 'PLANS_ERROR_ACTION' as const

export const plansReqAction = () => ({
    type: PLANS_REQ_ACTION
})

export const plansSuccessAction = (response: AxiosResponse) => ({
    type: PLANS_SUCCESS_ACTION,
    payload: response
})

export const plansErrorAction = (error: AxiosError) => ({
    type: PLANS_ERROR_ACTION,
    payload: error
})

export const plansAsyncAction = createAsyncAction(
    PLANS_REQ_ACTION,
    PLANS_SUCCESS_ACTION,
    PLANS_ERROR_ACTION
)<undefined, AxiosResponse, AxiosError>();