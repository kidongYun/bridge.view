import PlanType from './PlanType'

export class PlanBuilder {
    private readonly _plan: PlanType;

    constructor() {
        this._plan = new PlanType();
    }

    type(type: string): PlanBuilder {
        this._plan.setType(type);
        return this;
    }

    dateTime(dateTime: string): PlanBuilder {
        this._plan.setDateTime(dateTime);
        return this;
    }

    id(id: number): PlanBuilder {
        this._plan.setId(id);
        return this;
    }

    status(status: number): PlanBuilder {
        this._plan.setStatus(status);
        return this;
    }

    display(display: "NORMAL" | "DETAIL"): PlanBuilder {
        this._plan.setDisplay(display);
        return this;
    }

    objectiveId(objectiveId: number): PlanBuilder {
        this._plan.setObjectiveId(objectiveId);
        return this;
    }

    content(content: string): PlanBuilder {
        this._plan.setContent(content);
        return this;
    }

    build(): PlanType {
        return this._plan;
    }
}