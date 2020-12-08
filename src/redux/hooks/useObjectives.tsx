import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../configureStore';
import { useCallback } from 'react'
// import { setObjectivesAction, callObjectivesAction } from '../actions/objectivesAction'
import Cell from '../stores/cell'

export default function useObjectives() {
    // const getObjectives = useSelector((state: RootState) => state.objectives);

    // const dispatch = useDispatch();
    
    // const setObjectives = useCallback((cells: Cell[]) =>
    //     dispatch(setObjectivesAction(cells)), [dispatch]);

    // const callObjectives = useCallback(() => 
    //     dispatch(callObjectivesAction()), [dispatch]);

    // return {
    //     getObjectives,
    //     setObjectives,
    //     callObjectives
    // }
}