import { NotiAction } from './type'
import { SHOW_NOTI_ACTION, HIDE_NOTI_ACTION } from './action'
import Noti from "../stores/noti";

function noti(state: Noti = new Noti(), action: NotiAction) {
    switch (action.type) {
        case SHOW_NOTI_ACTION :
            return { type: action.payload.type, text: action.payload.text, visible: true };
        case HIDE_NOTI_ACTION :
            return { ...state, visible: false };
        default :
            return state;
    }
}

export default noti;