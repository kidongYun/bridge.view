import SubjectType from '../model/SubjectType';
import { SubjectBuilder } from '../model/SubjectType';

const DELETE_SUBJECT = 'subject/DELETE' as const
const OPEN_SUBJECT = 'subject/OPEN' as const
const UPDATE_SUBJECT = 'subject/UPDATE' as const

const UPDATE_SUBJECT_ID = 'subject/UPDATE/ID' as const
const UPDATE_SUBJECT_STATUS = 'subject/UPDATE/STATUS' as const

export const deleteSubject = (subject: SubjectType) => ({ type: DELETE_SUBJECT, payload: subject })
export const openSubject = (subject: SubjectType) => ({ type: OPEN_SUBJECT, payload: subject })
export const updateSubject = (subject: SubjectType) => ({ type: UPDATE_SUBJECT, payload: subject })
export const updateSubjectId = (id: number) => ({ type: UPDATE_SUBJECT_ID, payload: id })
export const updateSubjectStatus = (status: number) => ({ type: UPDATE_SUBJECT_STATUS, payload: status })

type SubjectAction =
    | ReturnType<typeof deleteSubject>
    | ReturnType<typeof openSubject>
    | ReturnType<typeof updateSubject>
    | ReturnType<typeof updateSubjectId>
    | ReturnType<typeof updateSubjectStatus>

type SubjectState = {
    deletedSubject: SubjectType
    openedSubject: SubjectType
    updatedSubject: SubjectType
}

const initialState = {
    deletedSubject: new SubjectBuilder().build(),
    openedSubject: new SubjectBuilder().build(),
    updatedSubject: new SubjectBuilder().build()
}

function api(state: SubjectState = initialState, action: SubjectAction) {
    switch (action.type) {
        case DELETE_SUBJECT :
            return { deletedSubject: action.payload, openedSubject: state.openedSubject, updatedSubject: state.updatedSubject }
        case OPEN_SUBJECT :
            return { deletedSubject: state.deletedSubject, openedSubject: action.payload, updatedSubject: state.updatedSubject }
        case UPDATE_SUBJECT :
            return { deletedSubject: state.deletedSubject, openedSubject: state.openedSubject, updatedSubject: action.payload }
        case UPDATE_SUBJECT_ID :
            return { 
                deletedSubject: state.deletedSubject, 
                openedSubject: state.openedSubject, 
                updateSubject: {
                    
                }}
        default :
            return state
    }
}

export default api;