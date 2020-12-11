import axios from 'axios'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../configureStore'
import { ObjectivesAction } from './type'
import Cell from '../stores/cell'
import { getObjectivesAsyncAction } from './action'

export function getObjectivesThunk(date: boolean): ThunkAction<void, RootState, null, ObjectivesAction> {
    return async dispatch => {
        const { request, success, failure } = getObjectivesAsyncAction;
        dispatch(request());
        try {
            const objectives = await call(date);
            dispatch(success(objectives));
        } catch (e) {
            dispatch(failure(e));
        }
    }
}

async function call(date: boolean) {
    const response = await axios.get<Cell[]>("http://localhost:8080/objective", { params: { date: date }});
    return response.data;
}