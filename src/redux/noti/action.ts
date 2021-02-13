export const SHOW_NOTI_ACTION = 'SHOW_NOTI_ACTION' as const
export const HIDE_NOTI_ACTION = 'HIDE_NOTI_ACTION' as const

export const showNotiAction = (
    type: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light", 
    text: string
) => ({
    type: SHOW_NOTI_ACTION, 
    payload: { type, text }
});

export const hideNotiAction = () => ({ type: HIDE_NOTI_ACTION });