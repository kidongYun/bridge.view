class Layout {
    private _dialog: boolean
    private _top: boolean
    private _bottom: boolean
    private _left: boolean
    private _right: boolean

    constructor() {
        this._dialog = false;
        this._top = true;
        this._bottom = false;
        this._left = false;
        this._right = false;
    }

    get dialog(): boolean {
        return this._dialog;
    }

    set dialog(val: boolean) {
        this._dialog = val;
    }

    get top(): boolean {
        return this._top;
    }

    set top(val: boolean) {
        this._top = val;
    }

    get bottom(): boolean {
        return this._bottom;
    }

    set bottom(val: boolean) {
        this._bottom = val;
    }

    get left(): boolean {
        return this._left;
    }

    set left(val: boolean) {
        this._left = val;
    }

    get right(): boolean {
        return this._right;
    }

    set right(val: boolean) {
        this._right = val;
    }
}

export default Layout;