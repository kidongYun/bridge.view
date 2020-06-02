class TabType {
    type: string
    title: string
    onClick: () => void

    constructor(type: string, title: string, onClick: () => void) {
        this.type = type;
        this.title = title;
        this.onClick = onClick;
    }
}

export default TabType;