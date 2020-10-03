const CELL_TYPE = 'cell/Type' as const
const CELL_DATETIME = 'cell/DateTime' as const
const SUBJECT_ID = 'subject/Id' as const
const SUBJECT_STATUS = 'subject/Status' as const
const SUBJECT_DISPLAY = 'subject/Display' as const
const OBJECTIVE_TITLE = 'objective/Title' as const
const OBJECTIVE_DESCRIPTION = 'objective/Description' as const
const OBJECTIVE_PRIORITY = 'objective/Priority' as const
const PLAN_OBJECTIVEID = 'plan/objectiveId' as const
const PLAN_CONTENT = 'plan/content' as const

export const setCellType = (type: string) => ({ type: CELL_TYPE, payload: type })
export const setCellDateTime = (dateTime: string) => ({ type: CELL_DATETIME, payload: dateTime })
export const setSubjectId = (id: number) => ({ type: SUBJECT_ID, payload: id })
export const setSubjectStatus = (status: number) => ({ type: SUBJECT_STATUS, payload: status })
export const setSubjectDisplay = (display: string) => ({ type: SUBJECT_DISPLAY, payload: display })
export const setObjectiveTitle = (title: string) => ({ type: OBJECTIVE_TITLE, payload: title })
export const setObjectiveDescription = (description: string) => ({ type: OBJECTIVE_DESCRIPTION, payload: description })
export const setObjectivePriority = (priority: number) => ({ type: OBJECTIVE_PRIORITY, payload: priority })
export const setPlanObjectiveId = (objectiveId: number) => ({ type: PLAN_OBJECTIVEID, payload: objectiveId })
export const setPlanContent = (content: string) => ({ type: PLAN_CONTENT, payload: content })

type CellAction =
    | ReturnType<typeof setCellType>
    | ReturnType<typeof setCellDateTime>
    | ReturnType<typeof setSubjectId>
    | ReturnType<typeof setSubjectStatus>
    | ReturnType<typeof setSubjectDisplay>
    | ReturnType<typeof setObjectiveTitle>
    | ReturnType<typeof setObjectiveDescription>
    | ReturnType<typeof setObjectivePriority>
    | ReturnType<typeof setPlanObjectiveId>
    | ReturnType<typeof setPlanContent>

type CellState = {
    cellType: string,
    cellDateTime: string,
    subjectId: number,
    subjectStatus: number,
    subjectDisplay: string,
    objectiveTitle: string,
    objectiveDescription: string,
    objectivePriority: number,
    planObjectiveId: number,
    planContent: string
}

const initialState = {
    cellType: "",
    cellDateTime: "",
    subjectId: 0,
    subjectStatus: 0,
    subjectDisplay: "",
    objectiveTitle: "",
    objectiveDescription: "",
    objectivePriority: 0,
    planObjectiveId: 0,
    planContent: ""
}

function cell(state: CellState = initialState, action: CellAction) {
    switch (action.type) {
        case CELL_TYPE :
            return { 
                cellType: action.payload, 
                cellDateTime: state.cellDateTime, 
                subjectId: state.subjectId,
                subjectStatus: state.subjectStatus,
                subjectDisplay: state.subjectDisplay,
                objectiveTitle: state.objectiveTitle,
                objectiveDescription: state.objectiveDescription,
                objectivePriority: state.objectivePriority,
                planObjectiveId: state.planObjectiveId,
                planContent: state.planContent
             };
        case CELL_DATETIME :
            return { 
                cellType: state.cellType, 
                cellDateTime: action.payload, 
                subjectId: state.subjectId,
                subjectStatus: state.subjectStatus,
                subjectDisplay: state.subjectDisplay,
                objectiveTitle: state.objectiveTitle,
                objectiveDescription: state.objectiveDescription,
                objectivePriority: state.objectivePriority,
                planObjectiveId: state.planObjectiveId,
                planContent: state.planContent
            };
        case SUBJECT_ID :
            return { 
                cellType: state.cellType, 
                cellDateTime: state.cellDateTime, 
                subjectId: action.payload,
                subjectStatus: state.subjectStatus,
                subjectDisplay: state.subjectDisplay,
                objectiveTitle: state.objectiveTitle,
                objectiveDescription: state.objectiveDescription,
                objectivePriority: state.objectivePriority,
                planObjectiveId: state.planObjectiveId,
                planContent: state.planContent
            };
        case SUBJECT_STATUS :
            return { 
                cellType: state.cellType, 
                cellDateTime: state.cellDateTime, 
                subjectId: state.subjectId, 
                subjectStatus: action.payload,
                subjectDisplay: state.subjectDisplay,
                objectiveTitle: state.objectiveTitle,
                objectiveDescription: state.objectiveDescription,
                objectivePriority: state.objectivePriority,
                planObjectiveId: state.planObjectiveId,
                planContent: state.planContent
            };
        case SUBJECT_DISPLAY :
            return {
                cellType: state.cellType, 
                cellDateTime: state.cellDateTime, 
                subjectId: state.subjectId, 
                subjectStatus: state.subjectStatus,
                subjectDisplay: action.payload,
                objectiveTitle: state.objectiveTitle,
                objectiveDescription: state.objectiveDescription,
                objectivePriority: state.objectivePriority,
                planObjectiveId: state.planObjectiveId,
                planContent: state.planContent
            };
        case OBJECTIVE_TITLE :
            return {
                cellType: state.cellType, 
                cellDateTime: state.cellDateTime, 
                subjectId: state.subjectId, 
                subjectStatus: state.subjectStatus,
                subjectDisplay: state.subjectDisplay,
                objectiveTitle: action.payload,
                objectiveDescription: state.objectiveDescription,
                objectivePriority: state.objectivePriority,
                planObjectiveId: state.planObjectiveId,
                planContent: state.planContent
            };
        case OBJECTIVE_DESCRIPTION :
            return {
                cellType: state.cellType, 
                cellDateTime: state.cellDateTime, 
                subjectId: state.subjectId, 
                subjectStatus: state.subjectStatus,
                subjectDisplay: state.subjectDisplay,
                objectiveTitle: state.objectiveTitle,
                objectiveDescription: action.payload,
                objectivePriority: state.objectivePriority,
                planObjectiveId: state.planObjectiveId,
                planContent: state.planContent
            }
        case OBJECTIVE_PRIORITY :
            return {
                cellType: state.cellType, 
                cellDateTime: state.cellDateTime, 
                subjectId: state.subjectId, 
                subjectStatus: state.subjectStatus,
                subjectDisplay: state.subjectDisplay,
                objectiveTitle: state.objectiveTitle,
                objectiveDescription: state.objectiveDescription,
                objectivePriority: action.payload,
                planObjectiveId: state.planObjectiveId,
                planContent: state.planContent
            }
        case PLAN_OBJECTIVEID :
            return {
                cellType: state.cellType, 
                cellDateTime: state.cellDateTime, 
                subjectId: state.subjectId, 
                subjectStatus: state.subjectStatus,
                subjectDisplay: state.subjectDisplay,
                objectiveTitle: state.objectiveTitle,
                objectiveDescription: state.objectiveDescription,
                objectivePriority: state.objectivePriority,
                planObjectiveId: action.payload,
                planContent: state.planContent
            }
        case PLAN_CONTENT :
            return {
                cellType: state.cellType, 
                cellDateTime: state.cellDateTime, 
                subjectId: state.subjectId, 
                subjectStatus: state.subjectStatus,
                subjectDisplay: state.subjectDisplay,
                objectiveTitle: state.objectiveTitle,
                objectiveDescription: state.objectiveDescription,
                objectivePriority: state.objectivePriority,
                planObjectiveId: state.planObjectiveId,
                planContent: action.payload
            }
        default :
            return state;
    }
}

export default cell;
