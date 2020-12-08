import * as actions from './action'
import { ActionType } from 'typesafe-actions'
import Cell from '../stores/cell'
import Response from '../stores/response'

export type ObjectivesAction = ActionType<typeof actions>

export type ObjectivesState = {
    response: {
        loading: boolean;
        error: Error | null;
        data: Response<Cell[]> | null;
    }
}
