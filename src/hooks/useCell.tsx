import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { useCallback } from 'react';

import { setCellType, setCellDateTime } from '../store/cell'

export default function useCell() {
    const cellType = useSelector((state: RootState) => state.cell.cellType);
    const cellDateTime = useSelector((state: RootState) => state.cell.cellDateTime);

    const dispatch = useDispatch();
    const onSetCellType = useCallback((cellType: string) => dispatch(setCellType(cellType)), [dispatch]);
    const onSetCellDateTime = useCallback((cellDateTime: string) => dispatch(setCellDateTime(cellDateTime)), [dispatch]);

    return {
        cellType,
        cellDateTime,
        onSetCellType,
        onSetCellDateTime
    }
}