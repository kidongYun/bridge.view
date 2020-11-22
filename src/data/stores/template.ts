export default class Template {
    dialog: boolean
    center: boolean
    top: boolean
    bottom: boolean
    left: boolean
    right: boolean

    constructor() {
        this.dialog = false;
        this.center = true;
        this.top = true;
        this.bottom = false;
        this.left = false;
        this.right = false;
    }

    public clone(val : Template): Template {
        return new TemplateBuilder()
            .dialog(val.dialog)
            .center(val.center)
            .top(val.top)
            .bottom(val.bottom)
            .left(val.left)
            .right(val.right)
            .build();
    }
}

export class TemplateBuilder {
    private readonly _template: Template;

    constructor() {
        this._template = new Template();
    }

    dialog(val: boolean): TemplateBuilder {
        this._template.dialog = val;
        return this;
    }

    center(val: boolean): TemplateBuilder {
        this._template.center = val;
        return this;
    }

    top(val: boolean): TemplateBuilder {
        this._template.top = val;
        return this;
    }

    bottom(val: boolean): TemplateBuilder {
        this._template.bottom = val;
        return this;
    }

    left(val: boolean): TemplateBuilder {
        this._template.left = val;
        return this;
    }

    right(val: boolean): TemplateBuilder {
        this._template.right = val;
        return this;
    }

    build(): Template {
        return this._template;
    }
}