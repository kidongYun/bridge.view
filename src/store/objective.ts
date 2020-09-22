import ObjectiveType from "../model/ObjectiveType";

const SET_TITLE = 'objective/TITLE' as const
const SET_DESC = 'objective/DESC' as const
const SET_PRIORITY = 'objective/PRIORITY' as const
const SET_DEADLINE = 'objective/DEADLINE' as const

export const setTitle = (title: string) => ({ type: SET_TITLE, payload: title })
export const setDesc = (desc: string) => ({ type: SET_DESC, payload: desc })
export const setPriority = (priority: number) => ({ type: SET_PRIORITY, payload: priority })
export const setDeadline = (deadline: string) => ({ type: SET_DEADLINE, payload: deadline })

type ObjectiveAction =
    | ReturnType<typeof setTitle>
    | ReturnType<typeof setDesc>
    | ReturnType<typeof setPriority>
    | ReturnType<typeof setDeadline>

type ObjectiveState = {
    title: string
    desc: string
    priority: number
    deadline: string
}

const initialState = {
    title: "",
    desc: "",
    priority: 0,
    deadline: ""
}

function objective(state: ObjectiveState = initialState, action: ObjectiveAction) {
    switch (action.type) {
        case SET_TITLE :
            return { title: action.payload, desc: state.desc, priority: state.priority, deadline: state.deadline }
        case SET_DESC :
            return { title: state.title, desc: action.payload, priority: state.priority, deadline: state.deadline }
        case SET_PRIORITY :
            return { title: state.title, desc: state.desc, priority: action.payload, deadline: state.deadline }
        case SET_DEADLINE :
            return { title: state.title, desc: state.desc, priority: state.priority, deadline: action.payload }
        default :
            return state;
    }
}

export default objective;