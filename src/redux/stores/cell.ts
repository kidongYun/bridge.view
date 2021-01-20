export default class Cell {
    id?: number
    type: "CELL" | "OBJECTIVE" | "PLAN" | "TODO"
    startDateTime?: Date
    endDateTime?: Date
    status?: "Complete" | "Progress" | "Prepared"

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

    startDateTime(startDateTime: Date): CellBuilder {
        this.cell.startDateTime = startDateTime;
        return this;
    }

    endDateTime(endDateTime: Date): CellBuilder {
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