import * as actions from './action'
import { ActionType } from 'typesafe-actions'
import Cell from '../stores/cell'

export type TodosAction = ActionType<typeof actions>

export type TodosState = {
    response: {
        loading: boolean;
        data: Cell[] | Error | null;
    }
}
