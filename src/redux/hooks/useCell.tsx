import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../configureStore';
import { useCallback } from 'react'
import { setObjectiveAction, setPlanAction } from '../actions/cellAction'
import Objective from '../stores/objective';
import Plan from '../stores/plan';

export default function useCell() {
    const getCell = useSelector((state: RootState) => state.cell);

    const dispatch = useDispatch();

    const setObjective = useCallback((objective: Objective) => 
        dispatch(setObjectiveAction(objective)), [dispatch]);

    const setPlan = useCallback((plan: Plan) => 
        dispatch(setPlanAction(plan)), [dispatch]);

    return {
        getCell,
        setObjective,
        setPlan
    }
}