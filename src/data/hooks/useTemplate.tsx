import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/index';
import { useCallback } from 'react'
import { setTemplateAction } from '../actions/templateAction'

export default function useTemplate() {
    const getTemplate = useSelector((state: RootState) => state.templateReducer)!;

    const dispatch = useDispatch();
    const setTemplate = useCallback((type: "DIALOG" | "CENTER" | "TOP" | "BOTTOM" | "LEFT" | "RIGHT", flag: boolean) => 
            dispatch(setTemplateAction(type, flag)), [dispatch]);

    return {
        getTemplate,
        setTemplate
    }
}