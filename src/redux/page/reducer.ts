import { PageAction } from './type'
import { SET_DIALOG_ACTION, SET_CENTER_ACTION, SET_TOP_ACTION, SET_BOTTOM_ACTION, SET_LEFT_ACTION, SET_RIGHT_ACTION } from './action'
import Page, { PageBuilder } from '../stores/page';

export default function page(state: Page = new PageBuilder().build(), action: PageAction) {
    switch(action.type) {
        case SET_DIALOG_ACTION :
            return { ...state, dialog: action.payload }
        case SET_CENTER_ACTION :
            return { ...state, center: action.payload }
        case SET_TOP_ACTION :
            return { ...state, top: action.payload }
        case SET_BOTTOM_ACTION :
            return { ...state, bottom: action.payload }
        case SET_LEFT_ACTION :
            return { ...state, left: action.payload }
        case SET_RIGHT_ACTION :
            return { ...state, right: action.payload }
        default :
            return state;
    }
}