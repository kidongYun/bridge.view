import CellType from './CellType'

class DateType extends CellType {
    date: string

    constructor(id: number, type: "date", date: string) {
        super(id, type);
        this.date = date;
    }
}

export default DateType;