export default class Priority {
    id: number | undefined
    level: number | undefined
    description: string | undefined
}

export class PriorityBuilder {
    private readonly priority: Priority;

    constructor() {
        this.priority = new Priority();
    }

    id(id: number): PriorityBuilder {
        this.priority.id = id;
        return this;
    }

    level(level: number): PriorityBuilder {
        this.priority.level = level;
        return this;
    }

    description(description: string): PriorityBuilder {
        this.priority.description = description;
        return this;
    }

    build(): Priority {
        return this.priority;
    }
}