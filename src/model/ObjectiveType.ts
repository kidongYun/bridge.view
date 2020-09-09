import SubjectType from './SubjectType';

export default class ObjectiveType extends SubjectType {
    private title: string
    private description: string
    private priority: number

    constructor() {
        super("OBJECTIVE");
        this.title = "";
        this.description = "";
        this.priority = 0;
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(title: string) {
        this.title = title;
    }

    getDescription(): string {
        return this.description;
    }

    setDescription(description: string) {
        this.description = description;
    }

    getPriority(): number {
        return this.priority;
    }

    setPriority(priority: number) {
        this.priority = priority;
    }
}