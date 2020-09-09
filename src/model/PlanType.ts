import SubjectType from './SubjectType';

export default class PlanType extends SubjectType {
    objectiveId: number
    content: string

    constructor() {
        super();
        this.objectiveId = 0;
        this.content = "";
    }
}