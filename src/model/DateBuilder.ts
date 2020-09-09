import DateType from './DateType'

export class DateBuilder {
    private readonly _date: DateType;

    constructor() {
        this._date = new DateType();
    }

    type(type: string): DateBuilder {
        this._date.setType(type);
        return this;
    }

    dateTime(dateTime: string): DateBuilder {
        this._date.setDateTime(dateTime);
        return this;
    }

    build(): DateType {
        return this._date;
    }
}