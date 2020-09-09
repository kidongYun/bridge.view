import TabType from './TabType'

export class TabBuilder {
    private readonly _tab: TabType;

    constructor() {
        this._tab = new TabType();
    }

    type(type: string): TabBuilder {
        this._tab.setType(type);
        return this;
    }

    title(title: string): TabBuilder {
        this._tab.setTitle(title);
        return this;
    }

    event(event: string): TabBuilder {
        this._tab.setEvent(event);
        return this;
    }

    build(): TabType {
        return this._tab;
    }
}