import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { useCallback } from 'react'

import { deleteSubject, openSubject, updateSubject } from '../store/subject'
import SubjectType from '../model/SubjectType';

export default function useApi() {
    const subject_deleted = useSelector((state: RootState) => state.subject.deletedSubject );
    const subject_opened = useSelector((state: RootState) => state.subject.openedSubject );
    const subject_updated = useSelector((state: RootState) => state.subject.updatedSubject );

    const dispatch = useDispatch();
    const subject_onDelete = useCallback((subject: SubjectType) => dispatch(deleteSubject(subject)), [dispatch]);
    const subject_onOpen = useCallback((subject: SubjectType) => dispatch(openSubject(subject)), [dispatch]);
    const subject_onUpdate = useCallback((subject: SubjectType) => dispatch(updateSubject(subject)), [dispatch]);

    return {
        subject_deleted,
        subject_opened,
        subject_updated,
        subject_onDelete,
        subject_onOpen,
        subject_onUpdate
    }
}