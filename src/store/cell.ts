const CELL_TYPE = 'cell/Type' as const
const CELL_DATETIME = 'cell/DateTime' as const

export const setCellType = (type: string) => ({ type: CELL_TYPE, payload: type })
export const setCellDateTime = (dateTime: string) => ({ type: CELL_DATETIME, payload: dateTime })

type CellAction =
    | ReturnType<typeof setCellType>
    | ReturnType<typeof setCellDateTime>

type CellState = {
    cellType: string,
    cellDateTime: string
}

const initialState = {
    cellType: "",
    cellDateTime: ""
}

function cell(state: CellState = initialState, action: CellAction) {
    switch (action.type) {
        case CELL_TYPE :
            return { cellType: action.payload, cellDateTime: state.cellDateTime };
        case CELL_DATETIME :
            return { cellType: state.cellType, cellDateTime: action.payload };
        default :
            return state;
    }
}

export default cell;