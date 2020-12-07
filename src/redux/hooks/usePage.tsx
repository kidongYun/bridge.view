import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/index';
import { useCallback } from 'react'
import { setDialogAction, setCenterAction, setTopAction, setBottomAction, setLeftAction, setRightAction } from '../actions/pageAction'
import Template from '../stores/template';

export default function usePage() {
    const getDialog = useSelector((state: RootState) => state.window.dialog);
    const getCenter = useSelector((state: RootState) => state.window.center);
    const getTop = useSelector((state: RootState) => state.window.top);
    const getBottom = useSelector((state: RootState) => state.window.bottom);
    const getLeft = useSelector((state: RootState) => state.window.left);
    const getRight = useSelector((state: RootState) => state.window.right);

    const dispatch = useDispatch();

    const setDialog = useCallback((dialog: Template) => dispatch(setDialogAction(dialog)), [dispatch]);
    const setCenter = useCallback((center: Template) => dispatch(setCenterAction(center)), [dispatch]);
    const setTop = useCallback((top: Template) => dispatch(setTopAction(top)), [dispatch]);
    const setBottom = useCallback((bottom: Template) => dispatch(setBottomAction(bottom)), [dispatch]);
    const setLeft = useCallback((left: Template) => dispatch(setLeftAction(left)), [dispatch]);
    const setRight = useCallback((right: Template) => dispatch(setRightAction(right)), [dispatch]);

    return {
        getDialog,
        getCenter,
        getTop,
        getBottom,
        getLeft,
        getRight,
        setDialog,
        setCenter,
        setTop,
        setBottom,
        setLeft,
        setRight
    }
}