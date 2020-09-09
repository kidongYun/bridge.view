import SubjectType from './SubjectType';

export default class ObjectiveType extends SubjectType {
    title: string
    description: string
    priority: number

    constructor() {
        super();
        this.title = "";
        this.description = "";
        this.priority = 0;
        this.status = 0;
        this.display = "NORMAL";
    }
}