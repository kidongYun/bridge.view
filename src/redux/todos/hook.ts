import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../configureStore';
import { getTodosThunk } from './thunk'

export default function useTodos() {
    const selectTodos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();

    const getTodos = (date: boolean) => { dispatch(getTodosThunk(date)) }

    return {
        selectTodos,
        getTodos
    }
}