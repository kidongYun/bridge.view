import CellType from './CellType'

class DateCellType extends CellType {
    date: Date | undefined

    constructor(id: number, date: Date) {
        super(id);
        this.date = date;
    }
}

export default DateCellType;