import SubjectType from './SubjectType';

export default class ObjectiveType extends SubjectType {
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