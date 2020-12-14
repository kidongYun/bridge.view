import axios from 'axios'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../configureStore'
import { ObjectivesAction } from './type'
import Cell from '../stores/cell'
import Objective from '../stores/objective'
import { getObjectivesAsyncAction, postObjectivesAsyncAction } from './action'

export function getObjectivesThunk(date: boolean): ThunkAction<void, RootState, null, ObjectivesAction> {
    return async dispatch => {
        const { request, success, failure } = getObjectivesAsyncAction;
        dispatch(request());
        try {
            const response = await get(date);
            dispatch(success(response));
        } catch (e) {
            dispatch(failure(e));
        }
    }
}

export function postObjectivesThunk(param: Objective): ThunkAction<void, RootState, null, ObjectivesAction> {
    return async dispatch => {
        const { request, success, failure } = postObjectivesAsyncAction;
        dispatch(request());
        try {
            await post(param);
        } catch (e) {
            dispatch(failure(e));
        } finally {
            const response = await get(true);
            dispatch(success(response));
        }
    }
}

async function get(date: boolean) {
    return await axios.get<Cell[]>("http://localhost:8080/objective", { params: { date: date }});
}

async function post(param: { 
    title: string, 
    description: string, 
    endDateTime: string, 
    priority: number, 
    status: number
}) {
    return await axios.post<Objective>("http://localhost:8080/objective", param);
}