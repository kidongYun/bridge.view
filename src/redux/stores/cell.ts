export default class Cell {
    type: "CELL" | "SUBJECT" | "OBJECTIVE" | "PLAN" | "TODO" | "DATE"
    startDateTime: string
    endDateTime: string

    constructor(type: "CELL" | "SUBJECT" | "OBJECTIVE" | "PLAN" | "TODO" | "DATE") {
        this.type = type;
        this.startDateTime = "0000-00-00";
        this.endDateTime = "0000-00-00";
    }
}

export class CellBuilder {
    private readonly cell: Cell;

    constructor() {
        this.cell = new Cell("CELL");
    }

    type(type: "CELL" | "SUBJECT" | "OBJECTIVE" | "PLAN" | "TODO" | "DATE"): CellBuilder {
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

    build(): Cell {
        return this.cell;
    }
}