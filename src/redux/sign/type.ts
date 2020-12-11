import * as actions from './action'
import { ActionType } from 'typesafe-actions'
import Sign from '../stores/sign'

export type SignAction = ActionType<typeof actions>

export type SignState = {
    response: {
        loading: boolean;
        data: Sign | Error | null;
    }
}