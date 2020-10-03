import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { useCallback } from 'react';

import {
    setCellType, 
    setCellDateTime, 
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
    const cellDateTime = useSelector((state: RootState) => state.cell.cellDateTime);
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
    const onSetCellDateTime = useCallback((dateTime: string) => dispatch(setCellDateTime(dateTime)), [dispatch]);
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
        cellDateTime,
        subjectId,
        subjectStatus,
        subjectDisplay,
        objectiveTitle,
        objectiveDescription,
        objectivePriority,
        planObjectiveId,
        planContent,
        onSetCellType,
        onSetCellDateTime,
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
