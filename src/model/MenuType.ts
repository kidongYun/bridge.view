import TabType from "./TabType";

class MenuType {
    align: string
    tabs: TabType[]

    constructor(align: string, tabs: TabType[]) {
        this.align = align;
        this.tabs = tabs;
    }
}

export default MenuType;