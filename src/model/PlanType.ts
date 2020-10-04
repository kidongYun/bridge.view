import SubjectType from './SubjectType';

export default class PlanType extends SubjectType {
    objectiveId: number
    content: string

    constructor() {
        super("PLAN");
        this.objectiveId = 0;
        this.content = "";
    }
}

export class PlanBuilder {
    private readonly _plan: PlanType;

    constructor() {
        this._plan = new PlanType();
    }

    type(type: string): PlanBuilder {
        this._plan.type = type;
        return this;
    }

    dateTime(dateTime: string): PlanBuilder {
        this._plan.dateTime = dateTime;
        return this;
    }

    id(id: number): PlanBuilder {
        this._plan.id = id;
        return this;
    }

    status(status: number): PlanBuilder {
        this._plan.status = status;
        return this;
    }

    objectiveId(objectiveId: number): PlanBuilder {
        this._plan.objectiveId = objectiveId;
        return this;
    }

    content(content: string): PlanBuilder {
        this._plan.content = content;
        return this;
    }

    build(): PlanType {
        return this._plan;
    }
}