import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { useCallback } from 'react'

import { setTitle, setDesc, setPriority, setDeadline } from '../store/objective'

export default function useObjective() {
    const obj_title = useSelector((state: RootState) => state.objective.title);
    const obj_desc = useSelector((state: RootState) => state.objective.desc);
    const obj_priority = useSelector((state: RootState) => state.objective.priority);
    const obj_deadline = useSelector((state: RootState) => state.objective.deadline);

    const dispatch = useDispatch();
    const obj_onSetTitle = useCallback((title: string) => dispatch(setTitle(title)), [dispatch]);
    const obj_onSetDesc = useCallback((desc: string) => dispatch(setDesc(desc)), [dispatch]);
    const obj_onSetPriority = useCallback((priority: number) => dispatch(setPriority(priority)), [dispatch]);
    const obj_onSetDeadline = useCallback((deadline: string) => dispatch(setDeadline(deadline)), [dispatch]);

    return {
        obj_title,
        obj_desc,
        obj_priority,
        obj_deadline,
        obj_onSetTitle,
        obj_onSetDesc,
        obj_onSetPriority,
        obj_onSetDeadline
    }
}