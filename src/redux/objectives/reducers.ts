import { createReducer } from 'typesafe-actions'
import { ObjectivesState, ObjectivesAction } from './types'
import { GET_OBJECTIVES_ACTION, GET_OBJECTIVES_ACTION_SUCCESS, GET_OBJECTIVES_ACTION_ERROR } from './actions'

const initialState: ObjectivesState = {
    objectives: {
        loading: false,
        error: null,
        data: null
    }
};

const objectives = createReducer<ObjectivesState, ObjectivesAction>(initialState, {
    [GET_OBJECTIVES_ACTION]: state => ({
        ...state,
        objectives: {
            loading: true,
            error: null,
            data: null
        }
    }),
    [GET_OBJECTIVES_ACTION_SUCCESS]: (state, action) => ({
        ...state,
        objectives: {
            loading: false,
            error: null,
            data: action.payload
        }
    }),
    [GET_OBJECTIVES_ACTION_ERROR]: (state, action) => ({
        ...state,
        objectives: {
            loading: false,
            error: action.payload,
            data: null
        }
    })
});

export default objectives;