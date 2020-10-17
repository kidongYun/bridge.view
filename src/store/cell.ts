const CELL_TYPE = 'cell/Type' as const
const CELL_STARTDATETIME = 'cell/StartDateTime' as const
const CELL_ENDDATETIME = 'cell/EndDateTime' as const
const SUBJECT_ID = 'subject/Id' as const
const SUBJECT_STATUS = 'subject/Status' as const
const SUBJECT_DISPLAY = 'subject/Display' as const
const OBJECTIVE_TITLE = 'objective/Title' as const
const OBJECTIVE_DESCRIPTION = 'objective/Description' as const
const OBJECTIVE_PRIORITY = 'objective/Priority' as const
const PLAN_OBJECTIVEID = 'plan/objectiveId' as const
const PLAN_CONTENT = 'plan/content' as const

export const setCellType = (type: string) => ({ type: CELL_TYPE, payload: type })
export const setCellStartDateTime = (startDateTime: string) => ({ type: CELL_STARTDATETIME, payload: startDateTime })
export const setCellEndDateTime = (endDateTime: string) => ({ type: CELL_ENDDATETIME, payload: endDateTime })
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
    | ReturnType<typeof setCellStartDateTime>
    | ReturnType<typeof setCellEndDateTime>
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
    cellStartDateTime: string,
    cellEndDateTime: string,
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
    cellStartDateTime: "",
    cellEndDateTime: "",
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
                cellStartDateTime: state.cellStartDateTime,
                cellEndDateTime: state.cellEndDateTime,
                subjectId: state.subjectId,
                subjectStatus: state.subjectStatus,
                subjectDisplay: state.subjectDisplay,
                objectiveTitle: state.objectiveTitle,
                objectiveDescription: state.objectiveDescription,
                objectivePriority: state.objectivePriority,
                planObjectiveId: state.planObjectiveId,
                planContent: state.planContent
             };
        case CELL_STARTDATETIME :
            return { 
                cellType: state.cellType, 
                cellStartDateTime: action.payload,
                cellEndDateTime: state.cellEndDateTime,
                subjectId: state.subjectId,
                subjectStatus: state.subjectStatus,
                subjectDisplay: state.subjectDisplay,
                objectiveTitle: state.objectiveTitle,
                objectiveDescription: state.objectiveDescription,
                objectivePriority: state.objectivePriority,
                planObjectiveId: state.planObjectiveId,
                planContent: state.planContent
            };
        case CELL_ENDDATETIME :
            return {
                cellType: state.cellType, 
                cellStartDateTime: state.cellStartDateTime,
                cellEndDateTime: action.payload,
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
                cellStartDateTime: state.cellStartDateTime,
                cellEndDateTime: state.cellEndDateTime,
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
                cellStartDateTime: state.cellStartDateTime,
                cellEndDateTime: state.cellEndDateTime,
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
                cellStartDateTime: state.cellStartDateTime,
                cellEndDateTime: state.cellEndDateTime,
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
                cellStartDateTime: state.cellStartDateTime,
                cellEndDateTime: state.cellEndDateTime,
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
                cellStartDateTime: state.cellStartDateTime,
                cellEndDateTime: state.cellEndDateTime,
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
                cellStartDateTime: state.cellStartDateTime,
                cellEndDateTime: state.cellEndDateTime,
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
                cellStartDateTime: state.cellStartDateTime,
                cellEndDateTime: state.cellEndDateTime,
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
                cellStartDateTime: state.cellStartDateTime,
                cellEndDateTime: state.cellEndDateTime,
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
