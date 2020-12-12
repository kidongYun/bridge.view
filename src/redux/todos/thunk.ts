import axios from 'axios'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../configureStore'
import { TodosAction } from './type'
import Cell from '../stores/cell'
import { getTodosAsyncAction } from './action'

export function getTodosThunk(date: boolean): ThunkAction<void, RootState, null, TodosAction> {
    return async dispatch => {
        const { request, success, failure } = getTodosAsyncAction;
        dispatch(request());
        try {
            const todos = await call(date);
            dispatch(success(todos));
        } catch (e) {
            dispatch(failure(e));
        }
    }
}

async function call(date: boolean) {
    return await axios.get<Cell[]>("http://localhost:8080/todo", { params: { date: date }});
}