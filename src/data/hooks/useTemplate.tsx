import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/index';
import { useCallback } from 'react'

import { setTemplateAction } from '../actions/templateAction'

export default function useTemplate() {
    const isDialog = useSelector((state: RootState) => state.templateReducer?.dialog);
    const isCenter = useSelector((state: RootState) => state.templateReducer?.center);
    const isTop = useSelector((state: RootState) => state.templateReducer?.top);
    const isBottom = useSelector((state: RootState) => state.templateReducer?.bottom);
    const isLeft = useSelector((state: RootState) => state.templateReducer?.left);
    const isRight = useSelector((state: RootState) => state.templateReducer?.right);

    const dispatch = useDispatch();
    const setTemplate = useCallback((type: "DIALOG" | "CENTER" | "TOP" | "BOTTOM" | "LEFT" | "RIGHT", flag: boolean) => dispatch(setTemplateAction(type, flag)), [dispatch]);

    return {
        isDialog,
        isCenter,
        isTop,
        isBottom,
        isLeft,
        isRight,
        setTemplate
    }
}