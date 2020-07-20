import PlanType from '../model/PlanType'

const GET = 'plan/GET' as const;

export const getPlan = (planList: PlanType[]) => ({ type: GET, payload: planList })

type PlanAction =
    | ReturnType<typeof getPlan>;

type PlanState = {
    planList: PlanType[];
}

const initialState: PlanState = {
    planList: []
}

function plan(state: PlanState = initialState, action: PlanAction) {
    switch(action.type) {
        case GET :
            return { planList: action.payload }
        default :
            return state;
    }
}

export default plan;