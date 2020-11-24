import axios, { AxiosResponse } from 'axios'
import { promises } from 'dns'
import * as utility from '../../service/Utility'
import Cell from '../stores/cell'

export const SET_OBJECTIVES_ACTION = "SET_OBJECTIVES_ACTION" as const
export const setObjectivesAction = (cells: Cell[]) => ({
    type: SET_OBJECTIVES_ACTION,
    payload: cells
})

export const CALL_OBJECTIVES_ACTION = "CALL_OBJECTIVES_ACTION" as const
export const callObjectivesAction = () => {
    let cells: Cell[] = [];

    getObj(true).then(response => {
        console.log("YKD2 : " + response.data)
    }).catch(err => {
        console.log("YKD2 : " + err);
    })

    return {
        type: CALL_OBJECTIVES_ACTION,
        payload: cells
    }
}

export type ObjectivesAction = 
    | ReturnType<typeof setObjectivesAction>
    | ReturnType<typeof callObjectivesAction>

function getObj(date: boolean): Promise<AxiosResponse<any>> {
    return axios.get("http://localhost:8080/objective", { params: { date: date }})
}


  
    