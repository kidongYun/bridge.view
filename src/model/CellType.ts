export default class CellType {
    type: string
    startDateTime: string
    endDateTime: string

    constructor(type: string) {
        this.type = type;
        this.startDateTime = "0000-00-00";
        this.endDateTime = "0000-00-00";
    }

    getDate(): string {
        return this.startDateTime.substring(0, 10);
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

    startDateTime(startDateTime: string): CellBuilder {
        this._cell.startDateTime = startDateTime;
        return this;
    }

    endDateTime(endDateTime: string): CellBuilder {
        this._cell.endDateTime = endDateTime;
        return this;
    }

    build(): CellType {
        return this._cell;
    }
}