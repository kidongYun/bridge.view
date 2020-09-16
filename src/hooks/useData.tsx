import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { useCallback } from 'react'

import { setObjectiveList, setPlanList, setTodoList } from '../store/data'
import CellType from '../model/CellType';

export default function useData() {
    const objectiveList = useSelector((state: RootState) => state.data.objectiveList);
    const planList = useSelector((state: RootState) => state.data.planList);
    const todoList = useSelector((state: RootState) => state.data.todoList);

    const dispatch = useDispatch();
    const onSetObjectiveList = useCallback((objectiveList: CellType[]) => dispatch(setObjectiveList(objectiveList)), [dispatch]);
    const onSetPlanList = useCallback((planList: CellType[]) => dispatch(setPlanList(planList)), [dispatch]);
    const onSetTodoList = useCallback((todoList: CellType[]) => dispatch(setTodoList(todoList)), [dispatch]);

    return {
        objectiveList,
        planList,
        todoList,
        onSetObjectiveList,
        onSetPlanList,
        onSetTodoList
    }
}