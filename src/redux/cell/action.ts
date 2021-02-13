import Objective from '../stores/objective';
import Plan from '../stores/plan';

export const SET_OBJECTIVE_ACTION = 'SET_OBJECTIVE_ACTION' as const
export const SET_PLAN_ACTION = 'SET_PLAN_ACTION' as const
export const FLUSH_ACTION = 'FLUSH_ACTION' as const

export const setObjectiveAction = (objective: Objective) => ({
    type: SET_OBJECTIVE_ACTION,
    payload: objective
})

export const setPlanAction = (plan: Plan) => ({
    type: SET_PLAN_ACTION,
    payload: plan
})

export const flushAction = () => ({
    type: FLUSH_ACTION
})