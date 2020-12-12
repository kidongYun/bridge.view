import axios from 'axios'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../configureStore'
import { PlansAction } from './type'
import Cell from '../stores/cell'
import { getPlansAsyncAction } from './action'

export function getPlansThunk(date: boolean): ThunkAction<void, RootState, null, PlansAction> {
    return async dispatch => {
        const { request, success, failure } = getPlansAsyncAction;
        dispatch(request());
        try {
            const plans = await call(date);
            dispatch(success(plans));
        } catch (e) {
            dispatch(failure(e));
        }
    }
}

async function call(date: boolean) {
    return await axios.get<Cell[]>("http://localhost:8080/plan", { params: { date: date }});
}