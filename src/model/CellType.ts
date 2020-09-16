export default class CellType {
    type: string
    dateTime: string

    constructor(type: string) {
        this.type = type;
        this.dateTime = "0000-00-00";
    }

    getDate(): string {
        return this.dateTime.substring(0, 10);
    }
}

export class CellBuilder {
    private readonly _cell: CellType;

    constructor() {
        this._cell = new CellType("CELL");
    }

    type(type: string): CellBuilder {
        this._cell.type = type;
        return this;
    }

    dateTime(dateTime: string): CellBuilder {
        this._cell.dateTime = dateTime;
        return this;
    }

    build(): CellType {
        return this._cell;
    }
}