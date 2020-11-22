export const SET_TEMPLATE_ACTION = "SET_TEMPLATE_ACTION" as const
export const setTemplateAction = (type: "DIALOG" | "CENTER" | "TOP" | "BOTTOM" | "LEFT" | "RIGHT", flag: boolean) => ({
    type: SET_TEMPLATE_ACTION,
    payload: {
        type, flag
    }
})

export type TemplateAction = 
    ReturnType<typeof setTemplateAction>