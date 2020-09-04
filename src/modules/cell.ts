import CellType from '../model/CellType'

const DELETE_CELL = 'cell/DELETE' as const
const OPEN_CELL = 'cell/OPEN' as const
const UPDATE_CELL = 'cell/UPDATE' as const

export const deleteCell = (cell: CellType) => ({ type: DELETE_CELL, payload: cell })
export const openCell = (cell: CellType) => ({ type: OPEN_CELL, payload: cell })
export const updateCell = (cell: CellType) => ({ type: UPDATE_CELL, payload: cell })

type ApiAction =
    | ReturnType<typeof deleteCell>
    | ReturnType<typeof openCell>
    | ReturnType<typeof updateCell>

type ApiState = {
    deletedCell: CellType
    openedCell: CellType
    updatedCell: CellType
}

const initialState = {
    deletedCell: { id: -1, type: "CELL" },
    openedCell: { id: -1, type: "CELL" },
    updatedCell: { id: -1, type: "CELL"}
}

function api(state: ApiState = initialState, action: ApiAction) {
    switch (action.type) {
        case DELETE_CELL :
            return { deletedCell: action.payload, openedCell: state.openedCell, updatedCell: state.updatedCell }
        case OPEN_CELL :
            return { deletedCell: state.deletedCell, openedCell: action.payload, updatedCell: state.updatedCell }
        case UPDATE_CELL :
            return { deletedCell: state.deletedCell, openedCell: state.openedCell, updatedCell: action.payload }
        default :
            return state
    }
}

export default api;