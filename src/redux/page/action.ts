import Page, { PageBuilder } from "../stores/page"
import Template from "../stores/template"

export const SET_DIALOG_ACTION = 'SET_DIALOG_ACTION' as const
export const SET_CENTER_ACTION = 'SET_CENTER_ACTION' as const
export const SET_TOP_ACTION = 'SET_TOP_ACTION' as const
export const SET_BOTTOM_ACTION = 'SET_BOTTOM_ACTION' as const
export const SET_LEFT_ACTION = 'SET_LEFT_ACTION' as const
export const SET_RIGHT_ACTION = 'SET_RIGHT_ACTION' as const

export const setDialogAction = (dialog: Template) => ({
    type: SET_DIALOG_ACTION,
    payload: dialog
})

export const setCenterAction = (center: Template) => ({
    type: SET_CENTER_ACTION,
    payload: center
})

export const setTopAction = (top: Template) => ({
    type: SET_TOP_ACTION,
    payload: top
})

export const setBottomAction = (bottom: Template) => ({
    type: SET_BOTTOM_ACTION,
    payload: bottom
})

export const setLeftAction = (left: Template) => ({
    type: SET_LEFT_ACTION,
    payload: left
})

export const setRightAction = (right: Template) => ({
    type: SET_RIGHT_ACTION,
    payload: right
})