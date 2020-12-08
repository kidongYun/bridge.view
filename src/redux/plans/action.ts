import { createStandardAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios'
import Cell from '../stores/cell'
import Response from '../stores/response'

export const GET_PLANS_ACTION = 'GET_PLANS_ACTION'
export const GET_PLANS_SUCCESS_ACTION = 'GET_PLANS_SUCCESS_ACTION'
export const GET_PLANS_ERROR_ACTION = 'GET_PLANS_ERROR_ACTION'

export const getPlansAction = createStandardAction(GET_PLANS_ACTION)();
export const getPlansSuccessAction = createStandardAction(GET_PLANS_SUCCESS_ACTION)<Response<Cell[]>>();
export const getPlansErrorAction = createStandardAction(GET_PLANS_ERROR_ACTION)<AxiosError>();

export const getPlansAsyncAction = createAsyncAction(
    GET_PLANS_ACTION,
    GET_PLANS_SUCCESS_ACTION,
    GET_PLANS_ERROR_ACTION
)<undefined, Response<Cell[]>, AxiosError>();