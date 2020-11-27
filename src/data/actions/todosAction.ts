import Cell from "../stores/cell"
import { DateBuilder } from "../stores/date";
import { TodoBuilder } from "../stores/todo";

export const setTodosAction = (cells: Cell[]) => ({
    type: 'SET_TODOS_ACTION',
    payload: cells
})

export const callTodosAction = () => {
    let cells: Cell[] = [];

    cells.push(new TodoBuilder().build());
    cells.push(new TodoBuilder().build());
    cells.push(new DateBuilder().build());

    return {
        type: 'CALL_TODOS_ACTION',
        payload: cells
    }
}

export type TodoAction =
    | ReturnType<typeof setTodosAction>
    | ReturnType<typeof callTodosAction>

export default function todos(state: Cell[] = [], action: TodoAction) {
    switch(action.type) {
        case 'SET_TODOS_ACTION' :
            return action.payload;
        case 'CALL_TODOS_ACTION' :
            return action.payload;
        default :
            return state;
    }
}