class NotiType {
    type: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light" | undefined
    text: string
    isShow: boolean

    constructor(type: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light" | undefined, text: string) {
        this.type = type;
        this.text = text
        this.isShow = false;
    }
}

export default NotiType;