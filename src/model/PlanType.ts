import SubjectType from './SubjectType';

export default class PlanType extends SubjectType {
    private objectiveId: number
    private content: string

    constructor() {
        super("PLAN");
        this.objectiveId = 0;
        this.content = "";
    }

    getObjectiveId(): number {
        return this.objectiveId;
    }

    setObjectiveId(objectiveId: number) {
        this.objectiveId = objectiveId;
    }

    getContent(): string {
        return this.content;
    }

    setContent(content: string) {
        this.content = content;
    }
}