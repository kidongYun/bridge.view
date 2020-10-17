import CellType from './CellType'

export default class DateType extends CellType {
    constructor() {
        super("DATE")
    }
}

export class DateBuilder {
    private readonly _date: DateType;

    constructor() {
        this._date = new DateType();
    }

    type(type: string): DateBuilder {
        this._date.type = type;
        return this;
    }

    startDateTime(startDateTime: string): DateBuilder {
        this._date.startDateTime = startDateTime;
        return this;
    }

    endDateTime(endDateTime: string): DateBuilder {
        this._date.endDateTime = endDateTime;
        return this;
    }

    build(): DateType {
        return this._date;
    }
}