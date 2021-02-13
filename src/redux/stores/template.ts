export default class Template {
    display: boolean
    component: string

    constructor() {
        this.display = false;
        this.component = "";
    }
}

export class TemplateBuilder {
    private readonly template: Template;

    constructor() {
        this.template = new Template();
    }

    display(val: boolean): TemplateBuilder {
        this.template.display = val;
        return this;
    }

    component(val: string): TemplateBuilder {
        this.template.component = val;
        return this;
    }

    build(): Template {
        return this.template;
    }
}