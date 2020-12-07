import Subject from './subject';

export default class Objective extends Subject {
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
    private readonly objective: Objective;

    constructor() {
        this.objective = new Objective();
    }

    type(type: "CELL" | "SUBJECT" | "OBJECTIVE" | "PLAN" | "TODO" | "DATE"): ObjectiveBuilder {
        this.objective.type = type;
        return this;
    }

    startDateTime(startDateTime: string): ObjectiveBuilder {
        this.objective.startDateTime = startDateTime;
        return this;
    }

    endDateTime(endDateTime: string): ObjectiveBuilder {
        this.objective.endDateTime = endDateTime;
        return this;
    }

    id(id: number): ObjectiveBuilder {
        this.objective.id = id;
        return this;
    }

    status(status: number): ObjectiveBuilder {
        this.objective.status = status;
        return this;
    }

    title(title: string): ObjectiveBuilder {
        this.objective.title = title;
        return this;
    }

    description(description: string): ObjectiveBuilder {
        this.objective.description = description;
        return this;
    }

    priority(priority: number): ObjectiveBuilder {
        this.objective.priority = priority;
        return this;
    }

    build(): Objective {
        return this.objective;
    }
}