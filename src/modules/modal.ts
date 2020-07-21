const SHOW_MODAL = 'modal/SHOW' as const
const HIDE_MODAL = 'modal/HIDE' as const

export const showModal = (type: string) => ({ type: SHOW_MODAL, payload: type })
export const hideModal = () => ({ type: HIDE_MODAL })

type ModalAction = 
    | ReturnType<typeof showModal>
    | ReturnType<typeof hideModal>

type ModalState = {
    type: string
    visible: boolean
}

const initialState = {
    type: "",
    visible: false
}

function modal(state: ModalState = initialState, action: ModalAction) {
    switch (action.type) {
        case SHOW_MODAL :
            return { type: action.payload, visible: true }
        case HIDE_MODAL :
            return { type: state.type, visible: false }
        default :
            return state;
    }
}

export default modal;