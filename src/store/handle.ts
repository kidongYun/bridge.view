import { stat } from "fs"

const SHOW_HANDLE = 'handle/SHOW' as const
const HIDE_HANDLE = 'handle/HIDE' as const
const TYPE_HANDLE = 'handle/TYPE' as const

export const showHandle = (name: string) => ({ type: SHOW_HANDLE, payload: name })
export const hideHandle = () => ({ type: HIDE_HANDLE })
export const typeHandle = (type: string) => ({ type: TYPE_HANDLE, payload: type }) 

type HandleAction = 
    | ReturnType<typeof showHandle>
    | ReturnType<typeof hideHandle>
    | ReturnType<typeof typeHandle>

type HandleState = {
    name: string
    type: string
    visible: boolean
}

const initialState = {
    name: "",
    type: "",
    visible: false
}

function handle(state: HandleState = initialState, action: HandleAction) {
    switch (action.type) {
        case SHOW_HANDLE :
            return { name: action.payload, type: state.type, visible: true }
        case HIDE_HANDLE :
            return { name: state.name, type: state.type, visible: false }
        case TYPE_HANDLE :
            return { name: state.name, type: action.payload, visible: state.visible }
        default :
            return state;
    }
}

export default handle;