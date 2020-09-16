import TabType from "./TabType";

export default class MenuType {
    align: string
    tabs: TabType[]

    constructor() {
        this.align = 'flex-start';
        this.tabs = [];
    }
}

export class MenuBuilder {
    private readonly _menu: MenuType;

    constructor() {
        this._menu = new MenuType();
    }

    align(align: string): MenuBuilder {
        this._menu.align = align;
        return this;
    }

    tabs(tabs: TabType[]): MenuBuilder {
        this._menu.tabs = tabs;
        return this;
    }

    build(): MenuType {
        return this._menu;
    }
}

