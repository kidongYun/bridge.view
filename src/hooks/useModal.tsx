import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react'

import { updateType, updateVisible } from '../modules/modal';

export default function useModal() {
    const type = useSelector((state: RootState) => state.modal.type);
    const visible = useSelector((state: RootState) => state.modal.visible);
    
    const dispatch = useDispatch();
    const onUpdateType = useCallback((type: string) => dispatch(updateType(type)), [dispatch]);
    const onUpdateVisible = useCallback((visible: boolean) => dispatch(updateVisible(visible)), [dispatch]);

    return {
        type,
        visible,
        onUpdateType,
        onUpdateVisible
    }
}