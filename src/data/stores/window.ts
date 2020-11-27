export default class Window {
    dialog: boolean
    center: boolean
    top: boolean
    bottom: boolean
    left: boolean
    right: boolean

    constructor() {
        this.dialog = false;
        this.center = false;
        this.top = false;
        this.bottom = false;
        this.left = false;
        this.right = false;
    }
}

export class WindowBuilder {
    private readonly window: Window;

    constructor() {
        this.window = new Window();
    }

    dialog(val: boolean): WindowBuilder {
        this.window.dialog = val;
        return this;
    }

    center(val: boolean): WindowBuilder {
        this.window.center = val;
        return this;
    }

    top(val: boolean): WindowBuilder {
        this.window.top = val;
        return this;
    }

    bottom(val: boolean): WindowBuilder {
        this.window.bottom = val;
        return this;
    }

    left(val: boolean): WindowBuilder {
        this.window.left = val;
        return this;
    }

    right(val: boolean): WindowBuilder {
        this.window.right = val;
        return this;
    }

    build(): Window {
        return this.window;
    }
}