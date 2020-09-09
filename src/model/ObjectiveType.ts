import SubjectType from './SubjectType';

export default class ObjectiveType extends SubjectType {
    private title: string
    description: string
    priority: number

    constructor() {
        super("OBJECTIVE");
        this.title = "";
        this.description = "";
        this.priority = 0;
        this.status = 0;
        this.display = "NORMAL";
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(title: string) {
        this.title = title;
    }
}