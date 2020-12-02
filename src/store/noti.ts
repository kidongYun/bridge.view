const SHOW_NOTI = 'noti/SHOW' as const;
const HIDE_NOTI = 'noti/HIDE' as const;

export const showNoti = (
    type: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light" | undefined, 
    text: string
) => ({
    type: SHOW_NOTI, 
    payload: {type, text} 
});
export const hideNoti = () => ({ type: HIDE_NOTI });

type NotiAction = 
    | ReturnType<typeof showNoti>
    | ReturnType<typeof hideNoti>

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
        case SHOW_NOTI :
            return { type: action.payload.type, text: action.payload.text, visible: true };
        case HIDE_NOTI :
            return { type: state.type, text: state.text, visible: false };
        default :
            return state;
    }
}

export default noti;