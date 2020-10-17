import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { useCallback } from 'react';

import {
    setCellType, 
    setCellStartDateTime,
    setCellEndDateTime, 
    setSubjectId,
    setSubjectStatus,
    setSubjectDisplay,
    setObjectiveTitle,
    setObjectiveDescription,
    setObjectivePriority,
    setPlanObjectiveId,
    setPlanContent
 } from '../store/cell'

export default function useCell() {
    const cellType = useSelector((state: RootState) => state.cell.cellType);
    const cellStartDateTime = useSelector((state: RootState) => state.cell.cellStartDateTime);
    const cellEndDateTime = useSelector((state: RootState) => state.cell.cellEndDateTime);
    const subjectId = useSelector((state: RootState) => state.cell.subjectId);
    const subjectStatus = useSelector((state: RootState) => state.cell.subjectStatus);
    const subjectDisplay = useSelector((state: RootState) => state.cell.subjectDisplay);
    const objectiveTitle = useSelector((state: RootState) => state.cell.objectiveTitle);
    const objectiveDescription = useSelector((state: RootState) => state.cell.objectiveDescription);
    const objectivePriority = useSelector((state: RootState) => state.cell.objectivePriority);
    const planObjectiveId = useSelector((state: RootState) => state.cell.planObjectiveId);
    const planContent = useSelector((state: RootState) => state.cell.planContent);

    const dispatch = useDispatch();
    const onSetCellType = useCallback((type: string) => dispatch(setCellType(type)), [dispatch]);
    const onSetCellStartDateTime = useCallback((startDateTime: string) => dispatch(setCellStartDateTime(startDateTime)), [dispatch]);
    const onSetCellEndDateTime = useCallback((endDateTime: string) => dispatch(setCellStartDateTime(endDateTime)), [dispatch]);
    const onSetSubjectId = useCallback((id: number) => dispatch(setSubjectId(id)), [dispatch]);
    const onSetSubjectStatus = useCallback((status: number) => dispatch(setSubjectStatus(status)), [dispatch]);
    const onSetSubjectDisplay = useCallback((display: string) => dispatch(setSubjectDisplay(display)), [dispatch]);
    const onSetObjectiveTitle = useCallback((title: string) => dispatch(setObjectiveTitle(title)), [dispatch]);
    const onSetObjectiveDescription = useCallback((description: string) => dispatch(setObjectiveDescription(description)), [dispatch]);
    const onSetObjectivePriority = useCallback((priority: number) => dispatch(setObjectivePriority(priority)), [dispatch]);
    const onSetPlanObjectiveId = useCallback((objectiveId: number) => dispatch(setPlanObjectiveId(objectiveId)), [dispatch]);
    const onSetPlanContent = useCallback((content: string) => dispatch(setPlanContent(content)), [dispatch]);

    return {
        cellType,
        cellStartDateTime,
        cellEndDateTime,
        subjectId,
        subjectStatus,
        subjectDisplay,
        objectiveTitle,
        objectiveDescription,
        objectivePriority,
        planObjectiveId,
        planContent,
        onSetCellType,
        onSetCellStartDateTime,
        onSetCellEndDateTime,
        onSetSubjectId,
        onSetSubjectStatus,
        onSetSubjectDisplay,
        onSetObjectiveTitle,
        onSetObjectiveDescription,
        onSetObjectivePriority,
        onSetPlanObjectiveId,
        onSetPlanContent
    }
}
