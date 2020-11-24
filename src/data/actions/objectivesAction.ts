import axios, { AxiosResponse } from 'axios'
import { promises } from 'dns'
import * as utility from '../../service/Utility'
import Cell from '../stores/cell'
import { ObjectiveBuilder } from '../stores/objective';
import { DateBuilder } from '../stores/date';

export const setObjectivesAction = (cells: Cell[]) => ({
    type: 'SET_OBJECTIVES_ACTION',
    payload: cells
})

export const callObjectivesAction = () => {
    let cells: Cell[] = [];

    /** We should get the data from API server */

    cells.push(new ObjectiveBuilder().build());
    cells.push(new ObjectiveBuilder().build());
    cells.push(new DateBuilder().build());

    return {
        type: 'CALL_OBJECTIVES_ACTION',
        payload: cells
    }
}

export type ObjectivesAction = 
    | ReturnType<typeof setObjectivesAction>
    | ReturnType<typeof callObjectivesAction>

function getObj(date: boolean): Promise<AxiosResponse<any>> {
    return axios.get("http://localhost:8080/objective", { params: { date: date }})
}


  
    