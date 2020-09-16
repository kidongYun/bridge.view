import SignType, { SignBuilder } from "../model/SignType";

const UPDATE_STATUS = 'sign/UPDATE_STATUS' as const;
const UPDATE_DESC = 'sign/UPDATE_DESC' as const;
const UPDATE_EMAIL = 'sign/UPDATE_EMAIL' as const;

export const updateStatus = (status: boolean) => ({ type: UPDATE_STATUS, payload: status });
export const updateDesc = (desc: string) => ({ type: UPDATE_DESC, payload: desc });
export const updateEmail = (email: string) => ({ type: UPDATE_EMAIL, payload: email });

type SignAction = 
    | ReturnType<typeof updateStatus>
    | ReturnType<typeof updateDesc>
    | ReturnType<typeof updateEmail>;

const initialState: SignType = new SignBuilder().build();

function sign(state: SignType = initialState, action: SignAction) {
    switch(action.type) {
        case UPDATE_STATUS :
            return { status: action.payload, desc: state.desc, email: state.email };
        case UPDATE_DESC :
            return { status: state.status, desc: action.payload, email: state.email };
        case UPDATE_EMAIL :
            return { status: state.status, desc: state.desc, email: action.payload };
        default :
            return state;
    }
}

export default sign;