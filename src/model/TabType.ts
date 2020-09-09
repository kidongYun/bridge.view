class TabType {
    private type: string
    private title: string
    private event: string

    constructor() {
        this.type = "outline-light";
        this.title = "";
        this.event = "";
    }

    getType(): string {
        return this.type;
    }

    setType(type: string) {
        this.type = type;
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(title: string) {
        this.title = title;
    }

    getEvent(): string {
        return this.event;
    }

    setEvent(event: string) {
        this.event = event;
    }
}

export default TabType;