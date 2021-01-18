export default class Cell {
    id: number | undefined
    type: "CELL" | "OBJECTIVE" | "PLAN" | "TODO"
    startDateTime: string | undefined
    endDateTime: string | undefined
    status: "Complete" | "Progress" | "Prepared" | undefined

    constructor(type: "CELL" | "OBJECTIVE" | "PLAN" | "TODO") {
        this.type = type;
    }
}

export class CellBuilder {
    private readonly cell: Cell;

    constructor() {
        this.cell = new Cell("CELL");
    }

    id(id: number): CellBuilder {
        this.cell.id = id;
        return this;
    }

    type(type: "CELL" | "OBJECTIVE" | "PLAN" | "TODO"): CellBuilder {
        this.cell.type = type;
        return this;
    }

    startDateTime(startDateTime: string): CellBuilder {
        this.cell.startDateTime = startDateTime;
        return this;
    }

    endDateTime(endDateTime: string): CellBuilder {
        this.cell.endDateTime = endDateTime;
        return this;
    }

    status(status: "Complete" | "Progress" | "Prepared"): CellBuilder {
        this.cell.status = status;
        return this;
    }

    build(): Cell {
        return this.cell;
    }
}