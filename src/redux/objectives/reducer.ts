import { createReducer } from 'typesafe-actions'
import { ObjectivesState, ObjectivesAction } from './type'
import { GET_OBJECTIVES_ACTION, GET_OBJECTIVES_SUCCESS_ACTION, GET_OBJECTIVES_ERROR_ACTION } from './action'

const initialState: ObjectivesState = {
    response: { 
        loading: false,
        error: null,
        data: null
    }
};

const objectives = createReducer<ObjectivesState, ObjectivesAction>(initialState, {
    [GET_OBJECTIVES_ACTION]: state => ({
        ...state,
        response: {
            loading: true,
            error: null,
            data: null
        }
    }),
    [GET_OBJECTIVES_SUCCESS_ACTION]: (state, action) => ({
        ...state,
        response: {
            loading: false,
            error: null,
            data: action.payload
        }
    }),
    [GET_OBJECTIVES_ERROR_ACTION]: (state, action) => ({
        ...state,
        response: {
            loading: false,
            error: action.payload,
            data: null
        }
    })
});

export default objectives;