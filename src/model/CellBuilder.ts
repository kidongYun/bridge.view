import CellType from './CellType';

export default class CellBuilder {
    private readonly _cell: CellType;

    constructor() {
        this._cell = new CellType();
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