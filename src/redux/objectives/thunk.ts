import axios from 'axios'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../configureStore'
import { ObjectivesAction } from './type'
import Cell from '../stores/cell'
import Objective from '../stores/objective'
import { objectivesAsyncAction } from './action'
import Sign from '../stores/sign'

export function getObjectivesThunk(sign: Sign): ThunkAction<void, RootState, null, ObjectivesAction> {
    return async dispatch => {
        const { request, success, failure } = objectivesAsyncAction;
        dispatch(request());
        try {
            const response = await getObjectives(sign);
            dispatch(success(response));
        } catch (e) {
            dispatch(failure(e));
        }
    }
}

export function postObjectivesThunk(obj: Objective, sign: Sign): ThunkAction<void, RootState, null, ObjectivesAction> {
    return async dispatch => {
        const { request, success, failure } = objectivesAsyncAction;
        dispatch(request());
        try {
            await postObjectives({ 
                endDateTime: obj.endDateTime!.toISOString(), 
                email: sign.email!, 
                title: obj.title!, 
                description: obj.description!, 
                priorityId: obj.priorityId! 
            }, sign.token!);
            
        } catch (e) {
            dispatch(failure(e));
        } finally {
            const response = await getObjectives(sign);
            dispatch(success(response));
        }
    }
}

export function putObjectivesThunk(obj: Objective, sign: Sign): ThunkAction<void, RootState, null, ObjectivesAction> {
    return async dispatch => {
        const { request, success, failure } = objectivesAsyncAction;
        dispatch(request());
        try {
            await putObjectives({ 
                id: obj.id!, 
                endDateTime: obj.endDateTime!.toISOString(), 
                email: sign.email!, 
                title: obj.title!, 
                description: obj.description!, 
                priorityId: obj.priorityId! 
            }, sign.token!);

        } catch (e) {
            dispatch(failure(e));
        } finally {
            const response = await getObjectives(sign);
            dispatch(success(response));
        }
    }
}

export function deleteObjectivesThunk(id: number, sign: Sign): ThunkAction<void, RootState, null, ObjectivesAction> {
    return async dispatch => {
        const { request, success, failure } = objectivesAsyncAction;
        dispatch(request());
        try {
            await deleteObjectives(id, sign.token!);
        } catch (e) {
            dispatch(failure(e));
        } finally {
            const response = await getObjectives(sign);
            dispatch(success(response));
        }
    }
}

async function getObjectives(sign: Sign) {
    return await axios.get<Cell[]>("http://localhost:8080/api/v1/objective/", 
        { params: { email: sign.email }, headers: { "x-auth-token": sign.token }});
}

async function postObjectives(post: { endDateTime: string, email: string, title: string, description: string, priorityId: number }, token: string) {
    return await axios.post<Objective>("http://localhost:8080/api/v1/objective", post, { headers: { "x-auth-token": token }});
}

async function putObjectives(put: { id: number, endDateTime: string, email: string, title: string, description: string, priorityId: number }, token: string) {
    return await axios.put<Objective>("http://localhost:8080/api/v1/objective/" + put.id, put, { headers: { "x-auth-token": token }});
}

async function deleteObjectives(id: number, token: string) {
    return await axios.delete("http://localhost:8080/api/v1/objective/" + id, { data: id, headers: { "x-auth-token": token }});
}
