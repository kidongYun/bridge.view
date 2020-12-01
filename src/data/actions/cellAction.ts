import Cell from '../stores/cell';
import Objective from '../stores/objective';
import Plan from '../stores/plan';

export const setObjectiveAction = (objective: Objective) => ({
    type: 'SET_OBJECTIVE_ACTION',
    payload: objective
})

export const setPlanAction = (plan: Plan) => ({
    type: 'SET_PLAN_ACTION',
    payload: plan
})

export type CellAction = 
    | ReturnType<typeof setObjectiveAction>
    | ReturnType<typeof setPlanAction>

export default function cell(state: Cell, action: CellAction) {
    switch(action.type) {
        case 'SET_OBJECTIVE_ACTION' :
            return action.payload;
        case 'SET_PLAN_ACTION' :
            return action.payload;
        default :
            return state;
    }
}