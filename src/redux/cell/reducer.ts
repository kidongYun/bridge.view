import { CellAction } from './type'
import { SET_OBJECTIVE_ACTION, SET_PLAN_ACTION, FLUSH_ACTION } from './action'
import Cell from '../stores/cell';

export default function cell(state: Cell = new Cell("CELL"), action: CellAction) {
    switch(action.type) {
        case SET_OBJECTIVE_ACTION :
            return action.payload;
        case SET_PLAN_ACTION :
            return action.payload;
        case FLUSH_ACTION :
            return new Cell("CELL")
        default :
            return state;
    }
}