import Objective from '../stores/objective';
import Plan from '../stores/plan';

export const SET_OBJECTIVE_ACTION = 'SET_OBJECTIVE_ACTION'
export const SET_PLAN_ACTION = 'SET_PLAN_ACTION'

export const setObjectiveAction = (objective: Objective) => ({
    type: SET_OBJECTIVE_ACTION,
    payload: objective
})

export const setPlanAction = (plan: Plan) => ({
    type: SET_PLAN_ACTION,
    payload: plan
})