import { createAsyncAction } from 'typesafe-actions';
import { AxiosError, AxiosResponse } from 'axios'

export const GET_OBJECTIVES_ACTION = 'GET_OBJECTIVES_ACTION' as const
export const GET_OBJECTIVES_SUCCESS_ACTION = 'GET_OBJECTIVES_SUCCESS_ACTION' as const
export const GET_OBJECTIVES_ERROR_ACTION = 'GET_OBJECTIVES_ERROR_ACTION' as const

export const POST_OBJECTIVES_ACTION = 'POST_OBJECTIVES_ACTION' as const
export const POST_OBJECTIVES_SUCCESS_ACTION = 'POST_OBJECTIVES_SUCCESS_ACTION' as const
export const POST_OBJECTIVES_ERROR_ACTION = 'POST_OBJECTIVES_ERROR_ACTION' as const

export const getObjectivesAction = () => ({
    type: GET_OBJECTIVES_ACTION
})

export const getObjectivesSuccessAction = (response: AxiosResponse) => ({
    type: GET_OBJECTIVES_SUCCESS_ACTION,
    payload: response
})

export const getObjectivesErrorAction = (error: AxiosError) => ({
    type: GET_OBJECTIVES_ERROR_ACTION,
    payload: error
})

export const postObjectivesAction = () => ({
    type: POST_OBJECTIVES_ACTION,
})

export const postObjectivesSuccessAction = (response: AxiosResponse) => ({
    type: POST_OBJECTIVES_SUCCESS_ACTION,
    payload: response
})

export const postObjectivesErrorAction = (error: AxiosError) => ({
    type: POST_OBJECTIVES_ERROR_ACTION,
    payload: error
})

// export const postObjectivesAction = createStandardAction(POST_OBJECTIVES_ACTION)();
// export const postObjectivesSuccessAction = createStandardAction(POST_OBJECTIVES_SUCCESS_ACTION)<Objective>();
// export const postObjectivesErrorAction = createStandardAction(POST_OBJECTIVES_ERROR_ACTION)<AxiosError>();

export const getObjectivesAsyncAction = createAsyncAction(
    GET_OBJECTIVES_ACTION,
    GET_OBJECTIVES_SUCCESS_ACTION,
    GET_OBJECTIVES_ERROR_ACTION
)<undefined, AxiosResponse, AxiosError>();

export const postObjectivesAsyncAction = createAsyncAction(
    POST_OBJECTIVES_ACTION,
    POST_OBJECTIVES_SUCCESS_ACTION,
    POST_OBJECTIVES_ERROR_ACTION
)<undefined, AxiosResponse, AxiosError>();