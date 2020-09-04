import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { useCallback } from 'react'

import { deleteCell, openCell, updateCell } from '../modules/cell'
import CellType from '../model/CellType';

export default function useApi() {
    const deletedCell = useSelector((state: RootState) => state.cell.deletedCell );
    const openedCell = useSelector((state: RootState) => state.cell.openedCell );
    const updatedCell = useSelector((state: RootState) => state.cell.updatedCell );

    const dispatch = useDispatch();
    const onDeleteCell = useCallback((cell: CellType) => dispatch(deleteCell(cell)), [dispatch]);
    const onOpenCell = useCallback((cell: CellType) => dispatch(openCell(cell)), [dispatch]);
    const onUpdateCell = useCallback((cell: CellType) => dispatch(updateCell(cell)), [dispatch]);

    return {
        deletedCell,
        openedCell,
        updatedCell,
        onDeleteCell,
        onOpenCell,
        onUpdateCell
    }
}