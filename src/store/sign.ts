import SignType, { SignBuilder } from "../model/SignType";

const UPDATE_STATUS = 'sign/UPDATE_STATUS' as const;
const UPDATE_DESC = 'sign/UPDATE_DESC' as const;
const UPDATE_EMAIL = 'sign/UPDATE_EMAIL' as const;
const UPDATE_PASSWORD = 'sign/UPDATE_PASSWORD' as const;

export const updateStatus = (status: boolean) => ({ type: UPDATE_STATUS, payload: status });
export const updateDesc = (desc: string) => ({ type: UPDATE_DESC, payload: desc });
export const updateEmail = (email: string) => ({ type: UPDATE_EMAIL, payload: email });
export const updatePassword = (password: string) => ({ type: UPDATE_PASSWORD, payload: password });

type SignAction = 
    | ReturnType<typeof updateStatus>
    | ReturnType<typeof updateDesc>
    | ReturnType<typeof updateEmail>
    | ReturnType<typeof updatePassword>

const initialState: SignType = new SignBuilder().build();

function sign(state: SignType = initialState, action: SignAction) {
    switch(action.type) {
        case UPDATE_STATUS :
            return { status: action.payload, desc: state.desc, email: state.email, password: state.password };
        case UPDATE_DESC :
            return { status: state.status, desc: action.payload, email: state.email, password: state.password };
        case UPDATE_EMAIL :
            return { status: state.status, desc: state.desc, email: action.payload, password: state.password };
        case UPDATE_PASSWORD :
            return { status: state.status, desc: state.desc, email: state.email, password: action.payload }; 
        default :
            return state;
    }
}

export default sign;