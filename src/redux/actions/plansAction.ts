import Cell from "../stores/cell";
import { DateBuilder } from "../stores/date";
import { PlanBuilder } from "../stores/plan";

const SET_PLANS_ACTION = 'SET_PLANS_ACTION' as const
const CALL_PLANS_ACTION = 'CALL_PLANS_ACTION' as const

export const setPlansAction = (cells: Cell[]) => ({
    type: SET_PLANS_ACTION,
    payload: cells
})

export const callPlansAction = () => {
    let cells: Cell[] = [];

    cells.push(new PlanBuilder().build());
    cells.push(new PlanBuilder().build());
    cells.push(new DateBuilder().build());

    return {
        type: CALL_PLANS_ACTION,
        payload: cells
    }
}

export type PlansAction =
    | ReturnType<typeof setPlansAction>
    | ReturnType<typeof callPlansAction>

export default function plans(state: Cell[] = [], action: PlansAction) {
    switch(action.type) {
        case SET_PLANS_ACTION :
            return action.payload;
        case CALL_PLANS_ACTION :
            return action.payload;
        default :
            return state;
    }
}
