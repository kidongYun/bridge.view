import CellType from './CellType';

export default class CellBuilder {
    private readonly _cell: CellType;

    constructor() {
        this._cell = new CellType("CELL");
    }

    type(type: string): CellBuilder {
        this._cell.setType(type);
        return this;
    }

    dateTime(dateTime: string): CellBuilder {
        this._cell.setDateTime(dateTime);
        return this;
    }

    build(): CellType {
        return this._cell;
    }
}