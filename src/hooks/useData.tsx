import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { useCallback } from 'react'

import { setObjectiveList, setPlanList, setTodoList } from '../store/data'
import CellType from '../model/CellType';

export default function useData() {
    const data_objectiveList = useSelector((state: RootState) => state.data.objectiveList);
    const data_planList = useSelector((state: RootState) => state.data.planList);
    const data_todoList = useSelector((state: RootState) => state.data.todoList);

    const dispatch = useDispatch();
    const data_onSetObjectiveList = useCallback((objectiveList: CellType[]) => dispatch(setObjectiveList(objectiveList)), [dispatch]);
    const data_onSetPlanList = useCallback((planList: CellType[]) => dispatch(setPlanList(planList)), [dispatch]);
    const data_onSetTodoList = useCallback((todoList: CellType[]) => dispatch(setTodoList(todoList)), [dispatch]);

    return {
        data_objectiveList,
        data_planList,
        data_todoList,
        data_onSetObjectiveList,
        data_onSetPlanList,
        data_onSetTodoList
    }
}