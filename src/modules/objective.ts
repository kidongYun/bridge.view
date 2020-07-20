import CellType from "../model/CellType";

const GET = 'objective/GET' as const;

export const getObjective = (objectiveList: CellType[]) => ({ type: GET, payload: objectiveList });

type ObjectiveAction =
    | ReturnType<typeof getObjective>;

type ObjectiveState = {
    objectiveList: CellType[];
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