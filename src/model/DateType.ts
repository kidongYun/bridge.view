import CellType from './CellType'

class DateType extends CellType {
    date: string

    constructor(id: number, date: string) {
        super(id, "DATE");
        this.date = date;
    }
}

export default DateType;