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