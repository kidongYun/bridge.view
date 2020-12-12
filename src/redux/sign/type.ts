import * as actions from './action'
import { ActionType } from 'typesafe-actions'
import Sign from '../stores/sign'
import { AxiosError, AxiosResponse } from 'axios'

export type SignAction = ActionType<typeof actions>

export type SignState = {
    response: {
        data: AxiosResponse | AxiosError | null;
    }
}