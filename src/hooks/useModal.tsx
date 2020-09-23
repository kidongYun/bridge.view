import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { useCallback } from 'react'

import { showModal, hideModal } from '../store/modal'

export default function useModal() {
    const modal_type = useSelector((state: RootState) => state.modal.type);
    const modal_visible = useSelector((state: RootState) => state.modal.visible);

    const dispatch = useDispatch();
    const modal_onShow = useCallback((type: string) => dispatch(showModal(type)), [dispatch]);
    const modal_onHide = useCallback(() => dispatch(hideModal()), [dispatch]);

    return {
        modal_type,
        modal_visible,
        modal_onShow,
        modal_onHide
    }
}