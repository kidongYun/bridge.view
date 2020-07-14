const UPDATE_TYPE = 'modal/UPDATE_TYPE' as const;
const UPDATE_VISIBLE = 'modal/UPDATE_VISIBLE' as const;

export const updateType = (type: string) => ({ type: UPDATE_TYPE, payload: type });
export const updateVisible = (visible: boolean) => ({ type: UPDATE_VISIBLE, payload: visible });;

type ModalAction =
    | ReturnType<typeof updateType>
    | ReturnType<typeof updateVisible>

type ModalState = {
    type: string
    visible: boolean
};

const initialState: ModalState = {
    type: "",
    visible: false,
};

function modal(state: ModalState = initialState, action: ModalAction) {
    switch(action.type) {
        case UPDATE_TYPE :
            return { type: action.payload, visible: state.visible }
        case UPDATE_VISIBLE :
            return { type: state.type, visible: action.payload }
        default :
            return state;
    }
}

export default modal;