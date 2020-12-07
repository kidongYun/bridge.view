import Subject from './subject';

export default class Todo extends Subject {
    planId: number;
    task: string;

    constructor() {
        super("TODO");
        this.planId = 0;
        this.task = "";
    }
}

export class TodoBuilder {
    private readonly todo: Todo;

    constructor() {
        this.todo = new Todo();
    }

    startDateTime(startDateTime: string): TodoBuilder {
        this.todo.startDateTime = startDateTime;
        return this;
    }

    endDateTime(endDateTime: string): TodoBuilder {
        this.todo.endDateTime = endDateTime;
        return this;
    }

    id(id: number): TodoBuilder {
        this.todo.id = id;
        return this;
    }

    status(status: number): TodoBuilder {
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