import Cell from './cell'

export default class Date extends Cell {
    constructor() {
        super("DATE")
    }
}

export class DateBuilder {
    private readonly date: Date;

    constructor() {
        this.date = new Date();
    }

    startDateTime(startDateTime: string): DateBuilder {
        this.date.startDateTime = startDateTime;
        return this;
    }

    endDateTime(endDateTime: string): DateBuilder {
        this.date.endDateTime = endDateTime;
        return this;
    }

    build(): Date {
        return this.date;
    }
}