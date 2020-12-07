export default class Noti {
    text: string
    type: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light"
    visible: boolean
    
    constructor() {
        this.text = "";
        this.type = "secondary"
        this.visible = false;
    }
}

export class NotiBuilder {
    private readonly noti: Noti;

    constructor() {
        this.noti = new Noti();
    }

    text(val: string): NotiBuilder {
        this.noti.text = val;
        return this;
    }

    type(val: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "dark" | "light"): NotiBuilder {
        this.noti.type = val;
        return this;
    }

    visible(val: boolean): NotiBuilder {
        this.noti.visible = val;
        return this;
    }

    build(): Noti {
        return this.noti;
    }
}
