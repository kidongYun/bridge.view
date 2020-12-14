import { createAsyncAction } from 'typesafe-actions';
import { AxiosError, AxiosResponse } from 'axios'

export const OBJECTIVES_REQ_ACTION = 'OBJECTIVES_REQ_ACTION' as const
export const OBJECTIVES_SUCCESS_ACTION = 'OBJECTIVES_SUCCESS_ACTION' as const
export const OBJECTIVES_ERROR_ACTION = 'OBJECTIVES_ERROR_ACTION' as const

export const objectivesReqAction = () => ({
    type: OBJECTIVES_REQ_ACTION
})

export const objectivesSuccessAction = (response: AxiosResponse) => ({
    type: OBJECTIVES_SUCCESS_ACTION,
    payload: response
})

export const objectivesErrorAction = (error: AxiosError) => ({
    type: OBJECTIVES_ERROR_ACTION,
    payload: error
})

export const objectivesAsyncAction = createAsyncAction(
    OBJECTIVES_REQ_ACTION,
    OBJECTIVES_SUCCESS_ACTION,
    OBJECTIVES_ERROR_ACTION
)<undefined, AxiosResponse, AxiosError>();