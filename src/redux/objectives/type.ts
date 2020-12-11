import * as actions from './action'
import { ActionType } from 'typesafe-actions'
import Cell from '../stores/cell'
import Objective from '../stores/objective'

export type ObjectivesAction = ActionType<typeof actions>

export type ObjectivesState = {
    response: {
        loading: boolean;
        data: Cell[] | Objective | Error | null;
    }
}
