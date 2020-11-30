import Page, { PageBuilder } from "../stores/page"
import Template from "../stores/template"

export const setDialogAction = (dialog: Template) => ({
    type: 'SET_DIALOG_ACTION',
    payload: dialog
})

export const setCenterAction = (center: Template) => ({
    type: 'SET_CENTER_ACTION',
    payload: center
})

export const setTopAction = (top: Template) => ({
    type: 'SET_TOP_ACTION',
    payload: top
})

export const setBottomAction = (bottom: Template) => ({
    type: 'SET_BOTTOM_ACTION',
    payload: bottom
})

export const setLeftAction = (left: Template) => ({
    type: 'SET_LEFT_ACTION',
    payload: left
})

export const setRightAction = (right: Template) => ({
    type: 'SET_RIGHT_ACTION',
    payload: right
})

export type PageAction =
    | ReturnType<typeof setDialogAction>
    | ReturnType<typeof setCenterAction>
    | ReturnType<typeof setTopAction>
    | ReturnType<typeof setBottomAction>
    | ReturnType<typeof setLeftAction>
    | ReturnType<typeof setRightAction>

export default function window(state: Page = new PageBuilder().build(), action: PageAction) {
    switch(action.type) {
        case 'SET_DIALOG_ACTION' :
            return { ...state, dialog: action.payload }
        case 'SET_CENTER_ACTION' :
            return { ...state, center: action.payload }
        case 'SET_TOP_ACTION' :
            return { ...state, top: action.payload }
        case 'SET_BOTTOM_ACTION' :
            return { ...state, bottom: action.payload }
        case 'SET_LEFT_ACTION' :
            return { ...state, left: action.payload }
        case 'SET_RIGHT_ACTION' :
            return { ...state, right: action.payload }
        default :
            return state;
    }
}