const UPDATE_STAGE = 'stage/UPDATE_STAGE' as const;

export const updateStage = (name: string) => ({ type: UPDATE_STAGE, payload: name });

type StageAction =
    | ReturnType<typeof updateStage>;

type StageState = {
    name: string
}

const initialState: StageState = {
    name: "OBJECTIVE"
}

function stage(state: StageState = initialState, action: StageAction) {
    switch(action.type) {
        case UPDATE_STAGE :
            return { name: action.payload };
        default :
            return state;
    }
}

export default stage;
