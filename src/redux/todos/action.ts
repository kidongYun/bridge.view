import { createStandardAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios'
import Cell from '../stores/cell'
import Response from '../stores/response'

export const GET_TODOS_ACTION = 'GET_TODOS_ACTION'
export const GET_TODOS_SUCCESS_ACTION = 'GET_TODOS_SUCCESS_ACTION'
export const GET_TODOS_ERROR_ACTION = 'GET_TODOS_ERROR_ACTION'

export const getTodosAction = createStandardAction(GET_TODOS_ACTION)();
export const getTodosSuccessAction = createStandardAction(GET_TODOS_SUCCESS_ACTION)<Response<Cell[]>>();
export const getTodosErrorAction = createStandardAction(GET_TODOS_ERROR_ACTION)<AxiosError>();

export const getTodosAsyncAction = createAsyncAction(
    GET_TODOS_ACTION,
    GET_TODOS_SUCCESS_ACTION,
    GET_TODOS_ERROR_ACTION
)<undefined, Response<Cell[]>, AxiosError>();