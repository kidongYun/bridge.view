import { createAsyncAction } from 'typesafe-actions';
import { AxiosError, AxiosResponse } from 'axios'

export const GET_TODOS_ACTION = 'GET_TODOS_ACTION' as const
export const GET_TODOS_SUCCESS_ACTION = 'GET_TODOS_SUCCESS_ACTION' as const
export const GET_TODOS_ERROR_ACTION = 'GET_TODOS_ERROR_ACTION' as const

export const getTodosAction = () => ({
    type: GET_TODOS_ACTION
})

export const getTodosSuccessAction = (response: AxiosResponse) => ({
    type: GET_TODOS_SUCCESS_ACTION,
    payload: response
})

export const getTodosErrorAction = (error: AxiosError) => ({
    type: GET_TODOS_ERROR_ACTION,
    payload: error
})

export const getTodosAsyncAction = createAsyncAction(
    GET_TODOS_ACTION,
    GET_TODOS_SUCCESS_ACTION,
    GET_TODOS_ERROR_ACTION
)<undefined, AxiosResponse, AxiosError>();