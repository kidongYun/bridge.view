import axios, { AxiosResponse } from 'axios'
import Cell from '../stores/cell'
import { ObjectiveBuilder } from '../stores/objective';
import { DateBuilder } from '../stores/date';

const SET_OBJECTIVES_ACTION = 'SET_OBJECTIVES_ACTION' as const
const CALL_OBJECTIVES_ACTION = 'CALL_OBJECTIVES_ACTION' as const

export const setObjectivesAction = (cells: Cell[]) => ({
    type: SET_OBJECTIVES_ACTION,
    payload: cells
})

export const callObjectivesAction = () => {
    let cells: Cell[] = [];

    /** We should get the data from API server */

    cells.push(new DateBuilder().startDateTime("20131194032021").endDateTime("20131194032021").build());
    cells.push(new ObjectiveBuilder()
        .startDateTime("20131194032021").id(1)
        .title("I would like to say English well")
        .description("A lot of the information is created by English language.")
        .priority(1)
        .build());

    cells.push(new ObjectiveBuilder()
        .startDateTime("20131194032021").id(2)
        .title("Creating the useful application")
        .description("Some application should be very famous thing")
        .priority(2)
        .build());

    cells.push(new DateBuilder().startDateTime("20131194032021").endDateTime("20131194032021").build());
    cells.push(new ObjectiveBuilder()
        .startDateTime("20131194032021").id(3)
        .title("I would like to say English well")
        .description("A lot of the information is created by English language.")
        .priority(1)
        .build());
    
    cells.push(new ObjectiveBuilder()
        .startDateTime("20131194032021").id(4)
        .title("Creating the useful application")
        .description("Some application should be very famous thing")
        .priority(2)
        .build());
    
    cells.push(new ObjectiveBuilder()
        .startDateTime("20131194032021").id(4)
        .title("Creating the useful application")
        .description("Some application should be very famous thing")
        .priority(2)
        .build());

    return {
        type: CALL_OBJECTIVES_ACTION,
        payload: cells
    }
}

export type ObjectivesAction = 
    | ReturnType<typeof setObjectivesAction>
    | ReturnType<typeof callObjectivesAction>

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

function getObj(date: boolean): Promise<AxiosResponse<any>> {
    return axios.get("http://localhost:8080/objective", { params: { date: date }})
}