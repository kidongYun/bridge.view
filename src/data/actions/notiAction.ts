import Noti from "../stores/noti";

const SHOW_NOTI_ACTION = 'SHOW_NOTI_ACTION' as const
const HIDE_NOTI_ACTION = 'HIDE_NOTI_ACTION' as const

export const showNotiAction = (
    type: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light" | undefined, 
    text: string
) => ({
    type: SHOW_NOTI_ACTION, 
    payload: { type, text }
});

export const hideNotiAction = () => ({ type: HIDE_NOTI_ACTION });

type NotiAction =
    | ReturnType<typeof showNotiAction>
    | ReturnType<typeof hideNotiAction>

function noti(state: Noti = new Noti(), action: NotiAction) {
    switch (action.type) {
        case SHOW_NOTI_ACTION :
            return { }
        case HIDE_NOTI_ACTION :
            return {}
        default :
            return state;
    }
}

export default noti;