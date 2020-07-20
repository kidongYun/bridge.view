import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react'



import { getObjective } from '../modules/objective'
import ObjCellType from '../model/ObjCellType';
import CellType from '../model/CellType';

export default function useObjective() {
    const objectiveList = useSelector((state: RootState) => state.objective.objectiveList);

    const dispatch = useDispatch();
    const onGetObjective = useCallback((objectiveList: CellType[]) => dispatch(getObjective(objectiveList)) , [dispatch]);

    return {
        objectiveList,
        onGetObjective
    }
}