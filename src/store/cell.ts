import CellType, { CellBuilder } from '../model/CellType'

const CELL_TYPE = 'cell/TYPE' as const
const CELL_DATETIME = 'cell/DATETIME' as const
const SUBJECT_ID = 'subject/ID' as const
const SUBJECT_STATUS = 'subject/STATUS' as const
const SUBJECT_DISPLAY = 'subject/DISPLAY' as const
const OBJECTIVE_TITLE = 'objective/TITLE' as const
const OBJECTIVE_DESCRIPTION = 'objective/DESCRIPTION' as const
const OBJECTIVE_PRIORITY = 'objective/PRIORITY' as const
const PLAN_OBJECTIVEID = 'plan/OBJECTIVEID' as const
const PLAN_CONTENT = 'plan/CONTENT' as const

export const cellType = (type: string) => ({ type: CELL_TYPE, payload: type })
export const cellDateTime = (dateTime: string) => ({ type: CELL_DATETIME, payload: dateTime })
export const subjectId = (id: number) => ({ type: SUBJECT_ID, payload: id })
export const subjectStatus = (status: number) => ({ type: SUBJECT_STATUS, payload: status })
export const subjectDisplay = (display: string) => ({ type: SUBJECT_DISPLAY, payload: display })
export const objectiveTitle = (title: string) => ({ type: OBJECTIVE_TITLE, payload: title })
export const objectiveDescription = (description: string) => ({ type: OBJECTIVE_DESCRIPTION, payload: description })
export const objectivePriority = (priority: number) => ({ type: OBJECTIVE_PRIORITY, payload: priority })
export const planObjectiveId = (objectiveId: number) => ({ type: PLAN_OBJECTIVEID, payload: objectiveId })
export const planContent = (content: string) => ({ type: PLAN_CONTENT, payload: content })

type CellAction =
    | ReturnType<typeof cellType>
    | ReturnType<typeof cellDateTime>
    | ReturnType<typeof subjectId>
    | ReturnType<typeof subjectStatus>
    | ReturnType<typeof subjectDisplay>
    | ReturnType<typeof objectiveTitle>
    | ReturnType<typeof objectiveDescription>
    | ReturnType<typeof objectivePriority>
    | ReturnType<typeof planObjectiveId>
    | ReturnType<typeof planContent>

type CellState = {
    cell_type: string
    cell_dateTime: string
    subject_id: number
    subject_status: number
    subject_display: string
    objective_title: string
    objective_description: string
    objective_priority: number
    plan_objectiveId: number
    plan_content: string
}

const initialState = {
    cell_type: "",
    cell_dateTime: "",
    subject_id: 0,
    subject_status: 0,
    subject_display: "",
    objective_title: "",
    objective_description: "",
    objective_priority: 0,
    plan_objectiveId: 0,
    plan_content: ""
}

function cell(state: CellState = initialState, action: CellAction) {
    switch (action.type) {
        case CELL_TYPE :
            return {

            }
        case CELL_DATETIME :
            return {}
        case SUBJECT_ID :
            return {}
        case SUBJECT_STATUS :
            return {}    
        case SUBJECT_DISPLAY :
            return {}
        case OBJECTIVE_TITLE :
            return {}
        case OBJECTIVE_DESCRIPTION :
            return {}
        case OBJECTIVE_PRIORITY :
            return {}
        case PLAN_OBJECTIVEID :
            return {}
        case PLAN_CONTENT :
            return {}
    }
}
