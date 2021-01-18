import axios from 'axios'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../configureStore'
import { ObjectivesAction } from './type'
import Cell from '../stores/cell'
import Objective from '../stores/objective'
import { objectivesAsyncAction } from './action'

export function getObjectivesThunk(): ThunkAction<void, RootState, null, ObjectivesAction> {
    return async dispatch => {
        const { request, success, failure } = objectivesAsyncAction;
        dispatch(request());
        try {
            const response = await getObjectives("john@gmail.com");
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
            const response = await getObjectives("john@gmail.com");
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
            const response = await getObjectives("john@gmail.com");
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
            const response = await getObjectives("john@gmail.com");
            dispatch(success(response));
        }
    }
}

async function getObjectives(email: string) {
    return await axios.get<Cell[]>("http://localhost:8080/api/v1/objective/email/" + email, 
        { params: { email: email }, auth: { username: "john@gmail.com", password: "q1w2e3r4" }});
}

async function postObjectives(obj: Objective) {
    console.log(obj);

    return await axios.post<Objective>("http://localhost:8080/api/v1/objective", obj, { auth: { username: "john@gmail.com", password: "q1w2e3r4" }});
}

async function putObjectives(obj: Objective) {
    return await axios.put<Objective>("http://localhost:8080/objective/" + obj.id, obj);
}

async function deleteObjectives(id: number) {
    return await axios.delete("http://localhost:8080/objective/" + id, { data: id });
}
