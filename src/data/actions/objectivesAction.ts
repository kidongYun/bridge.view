import axios from 'axios'
import * as utility from '../../service/Utility'
import Cell from '../stores/cell'

export const SET_OBJECTIVES_ACTION = "SET_OBJECTIVES_ACTION" as const
export const setObjectivesAction = (cells: Cell[]) => ({
    type: SET_OBJECTIVES_ACTION,
    payload: cells
})

export const CALL_OBJECTIVES_ACTION = "CALL_OBJECTIVES_ACTION" as const
export const callObjectivesAction = async () => {
    let cells: Cell[] = [];
    axios.get("http://localhost:8080/objective", { params: { date: true }})
    .then(response => {
        console.log(response.data);
        cells = utility.parse(response.data.data);
    });

    console.log("YKD : " + cells);

    return {
        type: CALL_OBJECTIVES_ACTION,
        payload: cells
    }
}

export type ObjectivesAction = 
    | ReturnType<typeof setObjectivesAction>
    | ReturnType<typeof callObjectivesAction>