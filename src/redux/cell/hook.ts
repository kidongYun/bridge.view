import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../configureStore';
import { useCallback } from 'react'
import { setObjectiveAction, setPlanAction, flushAction } from './action'
import Objective from '../stores/objective';
import Plan from '../stores/plan';

export default function useCell() {
    const selectCell = useSelector((state: RootState) => state.cell);

    const dispatch = useDispatch();

    const setObjective = useCallback((objective: Objective) => dispatch(setObjectiveAction(objective)), [dispatch]);
    const setPlan = useCallback((plan: Plan) => dispatch(setPlanAction(plan)), [dispatch]);
    const flush = useCallback(() => dispatch(flushAction()), [dispatch]);

    return {
        selectCell,
        setObjective,
        setPlan,
        flush
    }
}