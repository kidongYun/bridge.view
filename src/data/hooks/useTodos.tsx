import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/index';
import { useCallback } from 'react'
import { setTodosAction, callTodosAction } from '../actions/todosAction';
import Cell from '../stores/cell'

export default function useTodos() {
    const getTodos = useSelector((state: RootState) => state.todos);

    const dispatch = useDispatch();

    const setTodos = useCallback((cells: Cell[]) => 
        dispatch(setTodosAction(cells)), [dispatch]);

    const callTodos = useCallback(() => 
        dispatch(callTodosAction()), [dispatch]);

    return {
        getTodos,
        setTodos,
        callTodos
    }
}