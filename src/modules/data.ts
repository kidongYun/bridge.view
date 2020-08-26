import CellType from "../model/CellType";

const SET_OBJECTIVE = 'data/SET_OBJECTIVE' as const
const SET_PLAN = 'data/SET_PLAN' as const
const SET_TODO = 'data/SET_TODO' as const

export const setObjectiveList = (objectiveList: CellType[]) => ({ type: SET_OBJECTIVE, payload: objectiveList })
export const setPlanList = (planList: CellType[]) => ({ type: SET_PLAN, payload: planList })
export const setTodoList = (todoList: CellType[]) => ({ type: SET_TODO, payload: todoList })

type DataAction =
    | ReturnType<typeof setObjectiveList>
    | ReturnType<typeof setPlanList>
    | ReturnType<typeof setTodoList>

type DataState = {
    objectiveList: CellType[]
    planList: CellType[]
    todoList: CellType[]
}

const initialState = {
    objectiveList: [],
    planList: [],
    todoList: []
}

function data(state: DataState = initialState, action: DataAction) {
    switch (action.type) {
        case SET_OBJECTIVE :
            return { objectiveList: action.payload, planList: state.planList, todoList: state.todoList };
        case SET_PLAN :
            return { objectiveList: state.objectiveList, planList: action.payload, todoList: state.todoList };
        case SET_TODO :
            return { objectiveList: state.objectiveList, planList: state.planList, todoList: action.payload };
        default :
            return state;
    }
}

export default data;