import Subject from './subject';

export default class Plan extends Subject {
    objectiveId: number
    content: string

    constructor() {
        super("PLAN");
        this.objectiveId = 0;
        this.content = "";
    }
}

export class PlanBuilder {
    private readonly plan: Plan;

    constructor() {
        this.plan = new Plan();
    }

    type(type: "CELL" | "SUBJECT" | "OBJECTIVE" | "PLAN" | "TODO" | "DATE"): PlanBuilder {
        this.plan.type = type;
        return this;
    }

    startDateTime(startDateTime: string): PlanBuilder {
        this.plan.startDateTime = startDateTime;
        return this;
    }
    
    endDateTime(endDateTime: string): PlanBuilder {
        this.plan.endDateTime = endDateTime;
        return this;
    }

    id(id: number): PlanBuilder {
        this.plan.id = id;
        return this;
    }

    status(status: number): PlanBuilder {
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