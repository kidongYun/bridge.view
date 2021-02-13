import Template, { TemplateBuilder } from "./template"

export default class Page {
    dialog: Template
    center: Template
    top: Template
    bottom: Template
    left: Template
    right: Template

    constructor() {
        this.dialog = new TemplateBuilder().build();
        this.center = new TemplateBuilder().display(true).component("ObjectiveList").build();
        this.top = new TemplateBuilder().display(true).build();
        this.bottom = new TemplateBuilder().build();
        this.left = new TemplateBuilder().build();
        this.right = new TemplateBuilder().build();
    }
}

export class PageBuilder {
    private readonly page: Page;

    constructor() {
        this.page = new Page();
    }

    dialog(val: Template): PageBuilder {
        this.page.dialog = val;
        return this;
    }

    center(val: Template): PageBuilder {
        this.page.center = val;
        return this;
    }

    top(val: Template): PageBuilder {
        this.page.top = val;
        return this;
    }

    bottom(val: Template): PageBuilder {
        this.page.bottom = val;
        return this;
    }

    left(val: Template): PageBuilder {
        this.page.left = val;
        return this;
    }

    right(val: Template): PageBuilder {
        this.page.right = val;
        return this;
    }

    build(): Page {
        return this.page;
    }
}