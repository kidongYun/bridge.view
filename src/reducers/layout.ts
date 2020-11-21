import Layout from "../stores/layout";

const SET_LAYOUT_ACTION = "SET_LAYOUT_ACTION" as const
export const setLayoutAction = (type: "DIALOG" | "TOP" | "BOTTOM" | "LEFT" | "RIGHT", flag: boolean) => ({
    type: SET_LAYOUT_ACTION,
    payload: {
        type, flag
    }
})

type LayoutAction = ReturnType<typeof setLayoutAction>

function layout(state: Layout, action: LayoutAction) {
    switch (action.type) {
        case SET_LAYOUT_ACTION :
            return { 
                _dialog: false,
                _top: false,
                _bottom: false,
                _left: false,
                _right: false
            }
        default :
            return state;
    }
}

function setLayoutReducer() {
    return new Layout();
}

export default layout;