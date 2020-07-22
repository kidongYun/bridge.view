import CellType from '../model/CellType'

const DELETE_CELL = 'cell/DELETE' as const
const OPEN_CELL = 'cell/OPEN' as const

export const deleteCell = (cell: CellType) => ({ type: DELETE_CELL, payload: cell })
export const openCell = (cell: CellType) => ({ type: OPEN_CELL, payload: cell })

type ApiAction =
    | ReturnType<typeof deleteCell>
    | ReturnType<typeof openCell>

type ApiState = {
    deletedCell: CellType
    openedCell: CellType
}

const initialState = {
    deletedCell: { id: -1, type: "" },
    openedCell: { id: -1, type: "" }
}

function api(state: ApiState = initialState, action: ApiAction) {
    switch (action.type) {
        case DELETE_CELL :
            return { deletedCell: action.payload, openedCell: state.openedCell }
        case OPEN_CELL :
            return { deletedCell: state.deletedCell, openedCell: action.payload }
        default :
            return state
    }
}

export default api;