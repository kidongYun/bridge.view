import { createStandardAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios'
import Cell from '../stores/cell'

export const GET_TODOS_ACTION = 'GET_TODOS_ACTION' as const
export const GET_TODOS_SUCCESS_ACTION = 'GET_TODOS_SUCCESS_ACTION' as const
export const GET_TODOS_ERROR_ACTION = 'GET_TODOS_ERROR_ACTION' as const

export const getTodosAction = createStandardAction(GET_TODOS_ACTION)();
export const getTodosSuccessAction = createStandardAction(GET_TODOS_SUCCESS_ACTION)<Cell[]>();
export const getTodosErrorAction = createStandardAction(GET_TODOS_ERROR_ACTION)<AxiosError>();

export const getTodosAsyncAction = createAsyncAction(
    GET_TODOS_ACTION,
    GET_TODOS_SUCCESS_ACTION,
    GET_TODOS_ERROR_ACTION
)<undefined, Cell[], AxiosError>();