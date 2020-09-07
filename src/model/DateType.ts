import CellType from './CellType'

class DateType extends CellType {
    date: string

    constructor(id: number = 0, date: string) {
        super(id, "DATE");
        this.date = date;
    }
}

export default DateType;