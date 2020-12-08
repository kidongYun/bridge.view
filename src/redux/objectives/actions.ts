import { createStandardAction, createAsyncAction } from 'typesafe-actions';
import { AxiosError } from 'axios'
import Cell from '../stores/cell'

export const GET_OBJECTIVES_ACTION = 'GET_OBJECTIVES_ACTION'
export const GET_OBJECTIVES_ACTION_SUCCESS = 'GET_OBJECTIVES_ACTION_SUCCESS'
export const GET_OBJECTIVES_ACTION_ERROR = 'GET_OBJECTIVES_ACTION_ERROR'

export const getObjectivesAction = createStandardAction(GET_OBJECTIVES_ACTION)();
export const getObjectivesActionSuccess = createStandardAction(GET_OBJECTIVES_ACTION_SUCCESS)<Cell[]>();
export const getObjectivesActionError = createStandardAction(GET_OBJECTIVES_ACTION_ERROR)<AxiosError>();

export const getObjectivesActionAsync = createAsyncAction(
    GET_OBJECTIVES_ACTION,
    GET_OBJECTIVES_ACTION_SUCCESS,
    GET_OBJECTIVES_ACTION_ERROR
)<undefined, Cell[], AxiosError>();