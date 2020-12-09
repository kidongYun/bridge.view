import * as actions from './action'
import { ActionType } from 'typesafe-actions'
import Sign from '../stores/sign'
import Response from '../stores/response'

export type SignAction = ActionType<typeof actions>

export type SignState = {
    response: {
        loading: boolean;
        error: Error | null;
        data: Response<Sign> | null;
    }
}