import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { useCallback } from 'react'

import { setTitle, setDesc, setPriority, setDeadline } from '../store/objective'

export default function useObjective() {
    const title = useSelector((state: RootState) => state.objective.title);
    const desc = useSelector((state: RootState) => state.objective.desc);
    const priority = useSelector((state: RootState) => state.objective.priority);
    const deadline = useSelector((state: RootState) => state.objective.deadline);

    const dispatch = useDispatch();
    const onSetTitle = useCallback((title: string) => dispatch(setTitle(title)), [dispatch]);
    const onSetDesc = useCallback((desc: string) => dispatch(setDesc(desc)), [dispatch]);
    const onSetPriority = useCallback((priority: number) => dispatch(setPriority(priority)), [dispatch]);
    const onSetDeadline = useCallback((deadline: string) => dispatch(setDeadline(deadline)), [dispatch]);

    return {
        title,
        desc,
        priority,
        deadline,
        onSetTitle,
        onSetDesc,
        onSetPriority,
        onSetDeadline
    }
}