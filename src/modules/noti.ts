const SHOW = 'noti/SHOW' as const;
const HIDE = 'noti/HIDE' as const;

export const show = (type: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light" | undefined, text: string) => ({ type: SHOW, payload: {type, text} });
export const hide = () => ({ type: HIDE });

type NotiAction = 
    | ReturnType<typeof show>
    | ReturnType<typeof hide>

type NotiState = {
    type: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light" | undefined;
    text: string;
    visible: boolean;
}

const initialState: NotiState = {
    type: undefined,
    text: "",
    visible: false
}

function noti(state: NotiState = initialState, action: NotiAction) {
    switch (action.type) {
        case SHOW :
            return { type: action.payload.type, text: action.payload.text, visible: true };
        case HIDE :
            return { type: state.type, text: state.text, visible: false };
        default :
            return state;
    }
}

export default noti;