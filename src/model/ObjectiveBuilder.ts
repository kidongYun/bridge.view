import ObjectiveType from './ObjectiveType'

export class ObjectiveBuilder {
    private readonly _objective: ObjectiveType;

    constructor() {
        this._objective = new ObjectiveType();
    }

    type(type: string): ObjectiveBuilder {
        this._objective.setType(type);
        return this;
    }

    dateTime(dateTime: string): ObjectiveBuilder {
        this._objective.setDateTime(dateTime);
        return this;
    }

    id(id: number): ObjectiveBuilder {
        this._objective.setId(id);
        return this;
    }

    status(status: number): ObjectiveBuilder {
        this._objective.setStatus(status);
        return this;
    }

    display(display: "NORMAL" | "DETAIL"): ObjectiveBuilder {
        this._objective.setDisplay(display);
        return this;
    }

    title(title: string): ObjectiveBuilder {
        this._objective.setTitle(title);
        return this;
    }

    description(description: string): ObjectiveBuilder {
        this._objective.setDescription(description);
        return this;
    }

    priority(priority: number): ObjectiveBuilder {
        this._objective.setPriority(priority);
        return this;
    }

    build(): ObjectiveType {
        return this._objective;
    }
}