import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react'

import { showNoti, hideNoti } from '../modules/noti'

export default function useNoti() {
    const type = useSelector((state: RootState) => state.noti.type);
    const text = useSelector((state: RootState) => state.noti.text);
    const visible = useSelector((state: RootState) => state.noti.visible);

    const dispatch = useDispatch();
    const onShowNoti = useCallback((type: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light" | undefined, text: string) => dispatch(showNoti(type, text)), [dispatch]);
    const onHideNoti = useCallback(() => dispatch(hideNoti()), [dispatch]);

    return {
        type,
        text,
        visible,
        onShowNoti,
        onHideNoti
    }
}