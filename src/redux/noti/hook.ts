import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../configureStore';
import { useCallback } from 'react'
import { showNotiAction, hideNotiAction } from './action'

export default function useNoti() {
    const selectNoti = useSelector((state: RootState) => state.noti);

    const dispatch = useDispatch();

    const showNoti = useCallback((text: string, type: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light") => 
        dispatch(showNotiAction(type, text)), [dispatch]);

    const hideNoti = useCallback(() => 
        dispatch(hideNotiAction()), [dispatch]);

    return {
        selectNoti,
        showNoti,
        hideNoti
    }
}