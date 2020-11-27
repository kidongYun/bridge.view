import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/index'
import { useCallback } from 'react'
import { setPlansAction, callPlansAction } from '../actions/plansAction'
import Cell from '../stores/cell'

export default function usePlans() {
    const getPlans = useSelector((state: RootState) => state.plans);

    const dispatch = useDispatch();

    const setPlans = useCallback((cells: Cell[]) => 
        dispatch(setPlansAction(cells)), [dispatch]);

    const callPlans = useCallback(() => 
        dispatch(callPlansAction()), [dispatch]);

    return {
        getPlans,
        setPlans,
        callPlans
    }
}