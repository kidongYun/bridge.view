import axios from 'axios'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../configureStore'
import { PlansAction } from './type'
import Cell from '../stores/cell'
import { plansAsyncAction } from './action'
import Plan from '../stores/plan'

export function getPlansThunk(date: boolean): ThunkAction<void, RootState, null, PlansAction> {
    return async dispatch => {
        const { request, success, failure } = plansAsyncAction;
        dispatch(request());
        try {
            const response = await getPlans(date);
            dispatch(success(response));
        } catch (e) {
            dispatch(failure(e));
        }
    }
}

export function putPlansThunk(param: Plan): ThunkAction<void, RootState, null, PlansAction> {
    return async dispatch => {
        const { request, success, failure } = plansAsyncAction;
        dispatch(request());
        try {
            await putPlans(param);
        } catch (e) {
            dispatch(failure(e));
        } finally {
            const response = await getPlans(true);
            dispatch(success(response));
        }
    }
}

async function getPlans(date: boolean) {
    return await axios.get<Cell[]>("http://localhost:8080/plan", { params: { date: date }});
}

export async function putPlans(planPut: {
    id: number,
    objectiveId: number,
    content: string,
    startDateTime: string,
    status: number
}) {
    return await axios.put("http://localhost:8080/plan/" + planPut.id, planPut);
}