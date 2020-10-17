import SubjectType from './SubjectType';

export default class ObjectiveType extends SubjectType {
    title: string
    description: string
    priority: number

    constructor() {
        super("OBJECTIVE");
        this.title = "";
        this.description = "";
        this.priority = 0;
    }
}

export class ObjectiveBuilder {
    private readonly _objective: ObjectiveType;

    constructor() {
        this._objective = new ObjectiveType();
    }

    type(type: string): ObjectiveBuilder {
        this._objective.type = type;
        return this;
    }

    startDateTime(startDateTime: string): ObjectiveBuilder {
        this._objective.startDateTime = startDateTime;
        return this;
    }

    endDateTime(endDateTime: string): ObjectiveBuilder {
        this._objective.endDateTime = endDateTime;
        return this;
    }

    id(id: number): ObjectiveBuilder {
        this._objective.id = id;
        return this;
    }

    status(status: number): ObjectiveBuilder {
        this._objective.status = status;
        return this;
    }

    title(title: string): ObjectiveBuilder {
        this._objective.title = title;
        return this;
    }

    description(description: string): ObjectiveBuilder {
        this._objective.description = description;
        return this;
    }

    priority(priority: number): ObjectiveBuilder {
        this._objective.priority = priority;
        return this;
    }

    build(): ObjectiveType {
        return this._objective;
    }
}