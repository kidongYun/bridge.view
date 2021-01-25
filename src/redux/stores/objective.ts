import Cell from './cell';

export default class Objective extends Cell {
    title?: string
    description?: string
    priorityId?: number
    parentId?: number
    childrenIds: Array<number>
    planIds: Array<number>

    constructor() {
        super("OBJECTIVE");
        this.childrenIds = [];
        this.planIds = [];
    }

    static empty() {
        return new ObjectiveBuilder().build();
    }
}

export class ObjectiveBuilder {
    private readonly objective: Objective;

    constructor() {
        this.objective = new Objective();
    }

    id(id: number): ObjectiveBuilder {
        this.objective.id = id;
        return this;
    }

    type(type: "CELL" | "OBJECTIVE" | "PLAN" | "TODO"): ObjectiveBuilder {
        this.objective.type = type;
        return this;
    }

    startDateTime(startDateTime: Date): ObjectiveBuilder {
        this.objective.startDateTime = startDateTime;
        return this;
    }

    endDateTime(endDateTime: Date): ObjectiveBuilder {
        this.objective.endDateTime = endDateTime;
        return this;
    }

    status(status: "Complete" | "Progress" | "Prepared"): ObjectiveBuilder {
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

    priorityId(priorityId: number): ObjectiveBuilder {
        this.objective.priorityId = priorityId;
        return this;
    }

    parentId(parentId: number): ObjectiveBuilder {
        this.objective.parentId = parentId;
        return this;
    }

    childrenIds(childrenIds: Array<number>): ObjectiveBuilder {
        this.objective.childrenIds = childrenIds;
        return this;
    }

    planIds(planIds: Array<number>): ObjectiveBuilder {
        this.objective.planIds = planIds;
        return this;
    }

    build(): Objective {
        return this.objective;
    }
}