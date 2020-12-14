import axios from 'axios'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../configureStore'
import { ObjectivesAction } from './type'
import Cell from '../stores/cell'
import Objective from '../stores/objective'
import { objectivesAsyncAction } from './action'

export function getObjectivesThunk(date: boolean): ThunkAction<void, RootState, null, ObjectivesAction> {
    return async dispatch => {
        const { request, success, failure } = objectivesAsyncAction;
        dispatch(request());
        try {
            const response = await getObjectives(date);
            dispatch(success(response));
        } catch (e) {
            dispatch(failure(e));
        }
    }
}

export function postObjectivesThunk(param: Objective): ThunkAction<void, RootState, null, ObjectivesAction> {
    return async dispatch => {
        const { request, success, failure } = objectivesAsyncAction;
        dispatch(request());
        try {
            await postObjectives(param);
        } catch (e) {
            dispatch(failure(e));
        } finally {
            const response = await getObjectives(true);
            dispatch(success(response));
        }
    }
}

export function putObjectivesThunk(param: Objective): ThunkAction<void, RootState, null, ObjectivesAction> {
    return async dispatch => {
        const { request, success, failure } = objectivesAsyncAction;
        dispatch(request());
        try {
            await putObjectives(param);
        } catch (e) {
            dispatch(failure(e));
        } finally {
            const response = await getObjectives(true);
            dispatch(success(response));
        }
    }
}

export function deleteObjectivesThunk(id: number): ThunkAction<void, RootState, null, ObjectivesAction> {
    return async dispatch => {
        const { request, success, failure } = objectivesAsyncAction;
        dispatch(request());
        try {
            await deleteObjectives(id);
        } catch (e) {
            dispatch(failure(e));
        } finally {
            const response = await getObjectives(true);
            dispatch(success(response));
        }
    }
}

async function getObjectives(date: boolean) {
    return await axios.get<Cell[]>("http://localhost:8080/objective", { params: { date: date }});
}

async function postObjectives(param: { 
    title: string, 
    description: string, 
    endDateTime: string, 
    priority: number, 
    status: number
}) {
    console.log(param);

    return await axios.post<Objective>("http://localhost:8080/objective", param);
}

async function putObjectives(param: {
    id: number,
    title: string,
    description: string,
    endDateTime: string,
    priority: number,
    status: number
}) {
    return await axios.put<Objective>("http://localhost:8080/objective/" + param.id, param);
}

async function deleteObjectives(id: number) {
    return await axios.delete("http://localhost:8080/objective/" + id, { data: id });
}
