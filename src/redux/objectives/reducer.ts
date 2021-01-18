import { createReducer } from 'typesafe-actions'
import { ObjectivesAction } from './type'
import { OBJECTIVES_REQ_ACTION, OBJECTIVES_SUCCESS_ACTION, OBJECTIVES_ERROR_ACTION } from './action'
import Response from '../stores/response';
import Cell from '../stores/cell'

const objectives = createReducer<Response<Cell[]>, ObjectivesAction>(new Response(), {
    [OBJECTIVES_REQ_ACTION]: state => ({
        ...state,
        status: undefined
    }),
    [OBJECTIVES_SUCCESS_ACTION]: (state, action) => ({
        ...state,
        status: action.payload.status,
        body: action.payload.data
    }),
    [OBJECTIVES_ERROR_ACTION]: (state, action) => {
        if(action.payload.response === undefined) {
            return {
                ...state,
                status: undefined,
                body: action.payload.message
            }
        }
        
        return {
            ...state,
            status: action.payload.response.status,
            body: action.payload.response.data
        }
    }
});

export default objectives;