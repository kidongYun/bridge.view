export const showNotiAction = (
    type: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light", 
    text: string
) => ({
    type: 'SHOW_NOTI_ACTION', 
    payload: {type, text} 
});

export const hideNotiAction = () => ({ type: 'HIDE_NOTI_ACTION' });

type NotiAction =
    | ReturnType<typeof showNotiAction>
    | ReturnType<typeof hideNotiAction>

    

