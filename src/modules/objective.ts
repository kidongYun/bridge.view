import ObjectiveType from "../model/ObjectiveType";

const GET = 'objective/GET' as const;

export const getObjective = (objectiveList: ObjectiveType[]) => ({ type: GET, payload: objectiveList });

type ObjectiveAction =
    | ReturnType<typeof getObjective>;

type ObjectiveState = {
    objectiveList: ObjectiveType[];
}

const initialState: ObjectiveState = {
    objectiveList: []
}

function objective(state: ObjectiveState = initialState, action: ObjectiveAction) {
    switch (action.type) {
        case GET :
            return { objectiveList: action.payload };
        default :
            return state;
    }
}

export default objective