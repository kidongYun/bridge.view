import { createStandardAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios'
import Cell from '../stores/cell'

export const GET_PLANS_ACTION = 'GET_PLANS_ACTION' as const
export const GET_PLANS_SUCCESS_ACTION = 'GET_PLANS_SUCCESS_ACTION' as const
export const GET_PLANS_ERROR_ACTION = 'GET_PLANS_ERROR_ACTION' as const

export const getPlansAction = createStandardAction(GET_PLANS_ACTION)();
export const getPlansSuccessAction = createStandardAction(GET_PLANS_SUCCESS_ACTION)<Cell[]>();
export const getPlansErrorAction = createStandardAction(GET_PLANS_ERROR_ACTION)<AxiosError>();

export const getPlansAsyncAction = createAsyncAction(
    GET_PLANS_ACTION,
    GET_PLANS_SUCCESS_ACTION,
    GET_PLANS_ERROR_ACTION
)<undefined, Cell[], AxiosError>();