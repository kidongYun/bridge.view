import axios from 'axios'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../configureStore'
import { ObjectivesAction } from './types'
import Cell from '../stores/cell'
import { getObjectivesActionAsync } from './actions'

export function getObjectivesThunk(): ThunkAction<void, RootState, null, ObjectivesAction> {
    return async dispatch => {
        const { request, success, failure } = getObjectivesActionAsync;
        dispatch(request());
        try {
            const objectives = await getObj(true);
            dispatch(success(objectives));
        } catch (e) {
            dispatch(failure(e));
        }
    }
}

export async function getObj(date: boolean) {
    const response = await axios.get<Cell[]>("http://localhost:8080/objective", { params: { date: date }});
    return response.data;
}