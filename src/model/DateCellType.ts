import CellType from './CellType'

class DateCellType extends CellType {
    date: string

    constructor(id: number, date: string) {
        super(id);
        this.date = date;
    }
}

export default DateCellType;