import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react'

import { getObjective } from '../modules/objective'
import ObjectiveType from '../model/ObjectiveType';

export default function useObjective() {
    const objectiveList = useSelector((state: RootState) => state.objective.objectiveList);

    const dispatch = useDispatch();
    const onGetObjective = useCallback((objectiveList: ObjectiveType[]) => dispatch(getObjective(objectiveList)), [dispatch]);

    return {
        objectiveList,
        onGetObjective
    }
}