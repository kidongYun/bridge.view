import axios, { AxiosError, AxiosResponse } from 'axios'
import Cell from '../stores/cell'
import { ObjectiveBuilder } from '../stores/objective';
import { DateBuilder } from '../stores/date';
import Page from '../stores/page';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../configureStore'
import { createStandardAction, createAsyncAction } from 'typesafe-actions';

// const SET_OBJECTIVES_ACTION = 'SET_OBJECTIVES_ACTION' as const
// const CALL_OBJECTIVES_ACTION = 'CALL_OBJECTIVES_ACTION' as const
// const START_CALL_OBJECTIVES_ACTION = 'START_CALL_OBJECTIVES_ACTION' as const
// const END_CALL_OBJECTIVES_ACTION = 'END_CALL_OBJECTIVES_ACTION' as const

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

export type ObjectivesAction = 
    | ReturnType<typeof getObjectivesAction>
    | ReturnType<typeof getObjectivesActionSuccess>
    | ReturnType<typeof getObjectivesActionError>

// export function getObjectivesActionThunk(): ThunkAction<void, RootState, null, ObjectivesAction> {
//     return async dispatch => {
//         const { } = 
//     }
// }

// export const setObjectivesAction = (cells: Cell[]) => ({
//     type: SET_OBJECTIVES_ACTION,
//     payload: cells
// })

// export const callObjectivesAction = () => {
//     let cells: Cell[] = [];

//     return async (dispatch: Function) => {
//         dispatch(startCallObjectivesAction());
//         const { data: cells } = await axios.get("http://localhost:8080/objective", { params: { date: true }});
//         return dispatch(endCallObjectivesAction(cells))
//     }
// }

// export function startCallObjectivesAction() {
//     return { type: START_CALL_OBJECTIVES_ACTION };
// }

// export function endCallObjectivesAction(cells: Cell[]) {
//     return { type: END_CALL_OBJECTIVES_ACTION, payload: { cells } };
// }

// export default function objectives(state: Cell[] = [], action: any) {
//     switch (action.type) {
//         case SET_OBJECTIVES_ACTION :
//             return action.payload;
//         case START_CALL_OBJECTIVES_ACTION :
//             return { ...state, };
//         case END_CALL_OBJECTIVES_ACTION :
//             return {}; 
//         default :
//             return state;
//     }
// }

// function getObj(date: boolean): Promise<AxiosResponse<any>> {
//     return axios.get("http://localhost:8080/objective", { params: { date: date }})
// }