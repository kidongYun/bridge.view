import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../configureStore';
import { useCallback } from 'react'
import { setDialogAction, setCenterAction, setTopAction, setBottomAction, setLeftAction, setRightAction } from './action'
import Template from '../stores/template';

export default function usePage() {
    const selectPage = useSelector((state: RootState) => state.page);

    const dispatch = useDispatch();

    const setDialog = useCallback((dialog: Template) => dispatch(setDialogAction(dialog)), [dispatch]);
    const setCenter = useCallback((center: Template) => dispatch(setCenterAction(center)), [dispatch]);
    const setTop = useCallback((top: Template) => dispatch(setTopAction(top)), [dispatch]);
    const setBottom = useCallback((bottom: Template) => dispatch(setBottomAction(bottom)), [dispatch]);
    const setLeft = useCallback((left: Template) => dispatch(setLeftAction(left)), [dispatch]);
    const setRight = useCallback((right: Template) => dispatch(setRightAction(right)), [dispatch]);

    return {
        selectPage,
        setDialog,
        setCenter,
        setTop,
        setBottom,
        setLeft,
        setRight
    }
}