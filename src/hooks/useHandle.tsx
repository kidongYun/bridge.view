import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { useCallback } from 'react'

import { showHandle, hideHandle, typeHandle } from '../store/handle'

export default function useHandle() {
    const handle_name = useSelector((state: RootState) => state.handle.name);
    const handle_type = useSelector((state: RootState) => state.handle.type);
    const handle_visible = useSelector((state: RootState) => state.handle.visible);

    const dispatch = useDispatch();
    const handle_onShow = useCallback((name: string) => dispatch(showHandle(name)), [dispatch]);
    const handle_onType = useCallback((type: string) => dispatch(typeHandle(type)), [dispatch]);
    const handle_onHide = useCallback(() => dispatch(hideHandle()), [dispatch]);

    return {
        handle_name,
        handle_type,
        handle_visible,
        handle_onShow,
        handle_onType,
        handle_onHide
    }
}