import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react'

import { show, hide } from '../modules/noti'

export default function useNoti() {
    const type = useSelector((state: RootState) => state.noti.type);
    const text = useSelector((state: RootState) => state.noti.text);
    const visible = useSelector((state: RootState) => state.noti.visible);

    const dispatch = useDispatch();
    const onShow = useCallback((type: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light" | undefined, text: string) => dispatch(show(type, text)), [dispatch]);
    const onHide = useCallback(() => dispatch(hide()), [dispatch]);

    return {
        type,
        text,
        visible,
        onShow,
        onHide
    }
}