const UPDATE_SIGN = 'sign/UPDATE_SIGN' as const;

export const updateSign = (status: boolean, description: string) => ({ type: UPDATE_SIGN, payload: { status, description }});

type SignAction = 
    | ReturnType<typeof updateSign>;

type SignState = {
    status: boolean,
    description: string
}

const initialState: SignState = {
    status: false,
    description: ""
}

function sign(state: SignState = initialState, action: SignAction) {
    switch(action.type) {
        case UPDATE_SIGN :
            return { status: action.payload.status, description: action.payload.description };
        default :
            return state;
    }
}

export default sign;