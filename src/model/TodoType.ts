import SubjectType from './SubjectType';

export default class TodoType extends SubjectType {
    planId: number;
    task: string;

    constructor() {
        super("TODO");
        this.planId = 0;
        this.task = "";
    }
}

export class TodoBuilder {
    private readonly _todo: TodoType;

    constructor() {
        this._todo = new TodoType();
    }

    type(type: string): TodoBuilder {
        this._todo.type = type;
        return this;
    }

    startDateTime(startDateTime: string): TodoBuilder {
        this._todo.startDateTime = startDateTime;
        return this;
    }

    endDateTime(endDateTime: string): TodoBuilder {
        this._todo.endDateTime = endDateTime;
        return this;
    }

    id(id: number): TodoBuilder {
        this._todo.id = id;
        return this;
    }

    status(status: number): TodoBuilder {
        this._todo.status = status;
        return this;
    }

    planId(planId: number): TodoBuilder {
        this._todo.planId = planId;
        return this;
    }

    task(task: string): TodoBuilder {
        this._todo.task = task;
        return this;
    }

    build(): TodoType {
        return this._todo;
    }
}