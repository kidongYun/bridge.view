import Cell from "../stores/cell";
import { ObjectivesAction } from "../actions/objectivesAction";

export default function objectives(state: Cell[] = [], action: ObjectivesAction) {
    switch (action.type) {
        case 'SET_OBJECTIVES_ACTION' :
            return action.payload;
        case 'CALL_OBJECTIVES_ACTION' :
            return action.payload;
        default :
            return state;
    }
}