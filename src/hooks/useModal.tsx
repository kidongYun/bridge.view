import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react'

import { showModal, hideModal } from '../modules/modal'

export default function useModal() {
    const type = useSelector((state: RootState) => state.modal.type);
    const visible = useSelector((state: RootState) => state.modal.visible);

    const dispatch = useDispatch();
    const onShowModal = useCallback((type: string) => dispatch(showModal(type)), [dispatch]);
    const onHideModal = useCallback(() => dispatch(hideModal()), [dispatch]);

    return {
        type,
        visible,
        onShowModal,
        onHideModal
    }
}