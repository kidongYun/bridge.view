import CellType from './CellType';

export default class SubjectType extends CellType {
    private id: number;
    private status: number;
    private display: "NORMAL" | "DETAIL";

    constructor(type: string) {
        super(type)
        this.id = -1;
        this.status = 0;
        this.display = "NORMAL";
    }

    getId(): number {
        return this.id;
    }

    setId(id: number) {
        this.id = id;
    }

    getStatus(): number {
        return this.status;
    }

    setStatus(status: number) {
        this.status = status;
    }

    getDisplay(): "NORMAL" | "DETAIL" {
        return this.display;
    }

    setDisplay(display: "NORMAL" | "DETAIL") {
        this.display = display;
    }
}