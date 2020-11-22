import Cell from "../stores/cell";
import { SET_OBJECTIVES_ACTION, CALL_OBJECTIVES_ACTION, ObjectivesAction} from "../actions/objectivesAction";

export default function objectives(state: Cell[] = [], action: ObjectivesAction) {
    switch (action.type) {
        case SET_OBJECTIVES_ACTION :
            return action.payload;
        case CALL_OBJECTIVES_ACTION :
            return action.payload;
        default :
            return state;
    }
}