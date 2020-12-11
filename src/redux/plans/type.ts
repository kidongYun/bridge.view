import * as actions from './action'
import { ActionType } from 'typesafe-actions'
import Cell from '../stores/cell'

export type PlansAction = ActionType<typeof actions>

export type PlansState = {
    response: {
        loading: boolean;
        data: Cell[] | Error | null;
    }
}
