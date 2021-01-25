import Cell from './cell';

export default class Todo extends Cell {
    planId?: number
    task?: string

    constructor() {
        super("TODO");
    }

    static empty() {
        return new TodoBuilder().build();
    }
}

export class TodoBuilder {
    private readonly todo: Todo;

    constructor() {
        this.todo = new Todo();
    }

    id(id: number): TodoBuilder {
        this.todo.id = id;
        return this;
    }

    startDateTime(startDateTime: Date): TodoBuilder {
        this.todo.startDateTime = startDateTime;
        return this;
    }

    endDateTime(endDateTime: Date): TodoBuilder {
        this.todo.endDateTime = endDateTime;
        return this;
    }

    status(status: "Complete" | "Progress" | "Prepared"): TodoBuilder {
        this.todo.status = status;
        return this;
    }

    planId(planId: number): TodoBuilder {
        this.todo.planId = planId;
        return this;
    }

    task(task: string): TodoBuilder {
        this.todo.task = task;
        return this;
    }

    build(): Todo {
        return this.todo;
    }
}