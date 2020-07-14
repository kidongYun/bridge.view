import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react'

import { updateStage } from '../modules/stage';

export default function useStage() {
    const name = useSelector((state: RootState) => state.stage.name);

    const dispatch = useDispatch();
    const onUpdateStage = useCallback((name: string) => dispatch(updateStage(name)), [dispatch]);

    return {
        name,
        onUpdateStage
    }
} 