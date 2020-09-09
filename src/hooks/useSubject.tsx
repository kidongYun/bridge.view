import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react'

import { deleteSubject, openSubject, updateSubject } from '../modules/subject'
import SubjectType from '../model/SubjectType';

export default function useApi() {
    const deletedSubject = useSelector((state: RootState) => state.subject.deletedSubject );
    const openedSubject = useSelector((state: RootState) => state.subject.openedSubject );
    const updatedSubject = useSelector((state: RootState) => state.subject.updatedSubject );

    const dispatch = useDispatch();
    const onDeleteSubject = useCallback((subject: SubjectType) => dispatch(deleteSubject(subject)), [dispatch]);
    const onOpenSubject = useCallback((subject: SubjectType) => dispatch(openSubject(subject)), [dispatch]);
    const onUpdateSubject = useCallback((subject: SubjectType) => dispatch(updateSubject(subject)), [dispatch]);

    return {
        deletedSubject,
        openedSubject,
        updatedSubject,
        onDeleteSubject,
        onOpenSubject,
        onUpdateSubject
    }
}