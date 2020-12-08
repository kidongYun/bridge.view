import * as actions from './actions'
import { ActionType } from 'typesafe-actions'
import Cell from '../stores/cell'

export type ObjectivesAction = ActionType<typeof actions>

export type ObjectivesState = {
    objectives: {
        loading: boolean;
        error: Error | null;
        data: Cell[] | null;
    }
}
