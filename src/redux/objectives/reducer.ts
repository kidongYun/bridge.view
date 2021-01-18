import { createReducer } from 'typesafe-actions'
import { ObjectivesAction } from './type'
import { OBJECTIVES_REQ_ACTION, OBJECTIVES_SUCCESS_ACTION, OBJECTIVES_ERROR_ACTION } from './action'
import Response from '../stores/response';
import Objective, { ObjectiveBuilder } from '../stores/objective'

const objectives = createReducer<Response<Objective[]>, ObjectivesAction>(new Response(), {
    [OBJECTIVES_REQ_ACTION]: state => ({
        ...state,
        status: undefined
    }),
    [OBJECTIVES_SUCCESS_ACTION]: (state, action) => {
        let objectives: Array<Objective> = [];

        const response = action.payload.data;

        for(let i=0; i<response.length; i++) {
            objectives.push(
                new ObjectiveBuilder()
                .id(response[i].id)
                .startDateTime(response[i].startDateTime)
                .endDateTime(response[i].endDateTime)
                .title(response[i].title)
                .description(response[i].description)
                .priorityId(response[i].priorityId)
                .build()
            )
        }

        return {
            ...state,
            status: action.payload.status,
            body: objectives
        }
    },
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