import { createStandardAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios'
import Cell from '../stores/cell'
import Response from '../stores/response'
import Objective from '../stores/objective';

export const GET_OBJECTIVES_ACTION = 'GET_OBJECTIVES_ACTION' as const
export const GET_OBJECTIVES_SUCCESS_ACTION = 'GET_OBJECTIVES_SUCCESS_ACTION' as const
export const GET_OBJECTIVES_ERROR_ACTION = 'GET_OBJECTIVES_ERROR_ACTION' as const

export const POST_OBJECTIVES_ACTION = 'POST_OBJECTIVES_ACTION' as const
export const POST_OBJECTIVES_SUCCESS_ACTION = 'POST_OBJECTIVES_SUCCESS_ACTION' as const
export const POST_OBJECTIVES_ERROR_ACTION = 'POST_OBJECTIVES_ERROR_ACTION' as const

export const getObjectivesAction = createStandardAction(GET_OBJECTIVES_ACTION)();
export const getObjectivesSuccessAction = createStandardAction(GET_OBJECTIVES_SUCCESS_ACTION)<Response<Cell[]>>();
export const getObjectivesErrorAction = createStandardAction(GET_OBJECTIVES_ERROR_ACTION)<AxiosError>();

export const postObjectivesAction = createStandardAction(POST_OBJECTIVES_ACTION)();
export const postObjectivesSuccessAction = createStandardAction(POST_OBJECTIVES_SUCCESS_ACTION)<Response<Objective>>();
export const postObjectivesErrorAction = createStandardAction(POST_OBJECTIVES_ERROR_ACTION)<AxiosError>();

export const getObjectivesAsyncAction = createAsyncAction(
    GET_OBJECTIVES_ACTION,
    GET_OBJECTIVES_SUCCESS_ACTION,
    GET_OBJECTIVES_ERROR_ACTION
)<undefined, Response<Cell[]>, AxiosError>();

export const postObjectivesAsyncAction = createAsyncAction(
    POST_OBJECTIVES_ACTION,
    POST_OBJECTIVES_SUCCESS_ACTION,
    POST_OBJECTIVES_ERROR_ACTION
)<undefined, Response<Objective>, AxiosError>();