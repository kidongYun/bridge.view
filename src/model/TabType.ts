export default class TabType {
    type: string
    title: string
    event: string

    constructor() {
        this.type = "outline-light";
        this.title = "";
        this.event = "";
    }
}

export class TabBuilder {
    private readonly _tab: TabType;

    constructor() {
        this._tab = new TabType();
    }

    type(type: string): TabBuilder {
        this._tab.type = type;
        return this;
    }

    title(title: string): TabBuilder {
        this._tab.title = title;
        return this;
    }

    event(event: string): TabBuilder {
        this._tab.event = event;
        return this;
    }

    build(): TabType {
        return this._tab;
    }
}