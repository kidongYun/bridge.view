import axios from 'axios'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../configureStore'
import { PlansAction } from './type'
import Cell from '../stores/cell'
import { plansAsyncAction } from './action'
import Plan from '../stores/plan'
import Sign from '../stores/sign'

export function getPlansThunk(sign: Sign): ThunkAction<void, RootState, null, PlansAction> {
    return async dispatch => {
        const { request, success, failure } = plansAsyncAction;
        dispatch(request());
        try {
            const response = await getPlans(sign);
            dispatch(success(response));
        } catch (e) {
            dispatch(failure(e));
        }
    }
}

export function putPlansThunk(plan: Plan, sign: Sign): ThunkAction<void, RootState, null, PlansAction> {
    return async dispatch => {
        console.log("putPlansThunk");
        const { request, success, failure } = plansAsyncAction;
        dispatch(request());
        try {
            console.log("putPlansThunk!!!");
            console.log(plan.startDateTime);

            await putPlans({
                id: plan.id!, 
                startDateTime: plan.startDateTime + "", 
                email: sign.email!,
                content: plan.content!,
                objectiveId: plan.objectiveId! 
            }, sign.token!);
            
        } catch (e) {
            dispatch(failure(e));
        } finally {
            const response = await getPlans(sign);
            dispatch(success(response));
        }
    }
}

async function getPlans(sign: Sign) {
    return await axios.get<Cell[]>("http://localhost:8080/api/v1/plan/email/" + sign.email, 
    { params: { email: sign.email }, headers: { "x-auth-token": sign.token }});
}

async function putPlans(put: { id: number, startDateTime: string, email: string, content: string, objectiveId: number }, token: string) {
    console.log("hello");
    return await axios.put("http://localhost:8080/api/v1/plan/" + put.id, put, { headers: { "x-auth-token": token }});
}