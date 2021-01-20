import Cell from './cell';

export default class Plan extends Cell {
    objectiveId: number | undefined
    content: string | undefined

    constructor() {
        super("PLAN");
    }
}

export class PlanBuilder {
    private readonly plan: Plan;

    constructor() {
        this.plan = new Plan();
    }

    id(id: number): PlanBuilder {
        this.plan.id = id;
        return this;
    }

    type(type: "CELL" | "OBJECTIVE" | "PLAN" | "TODO"): PlanBuilder {
        this.plan.type = type;
        return this;
    }

    startDateTime(startDateTime: Date): PlanBuilder {
        this.plan.startDateTime = startDateTime;
        return this;
    }
    
    endDateTime(endDateTime: Date): PlanBuilder {
        this.plan.endDateTime = endDateTime;
        return this;
    }

    status(status: "Complete" | "Progress" | "Prepared"): PlanBuilder {
        this.plan.status = status;
        return this;
    }

    objectiveId(objectiveId: number): PlanBuilder {
        this.plan.objectiveId = objectiveId;
        return this;
    }

    content(content: string): PlanBuilder {
        this.plan.content = content;
        return this;
    }

    build(): Plan {
        return this.plan;
    }
}