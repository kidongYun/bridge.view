import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/index';
import { useCallback } from 'react'
import { showNotiAction, hideNotiAction } from '../actions/notiAction'

export default function useNoti() {
    const getText = useSelector((state: RootState) => state.noti.text);
    const getType = useSelector((state: RootState) => state.noti.type);
    const getVisible = useSelector((state: RootState) => state.noti.visible);

    const dispatch = useDispatch();

    const showNoti = useCallback((text: string, type: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light") => 
        dispatch(showNotiAction(type, text)), [dispatch]);

    const hideNoti = useCallback(() => 
        dispatch(hideNotiAction()), [dispatch]);

    return {
        getText,
        getType,
        getVisible,
        showNoti,
        hideNoti
    }
}