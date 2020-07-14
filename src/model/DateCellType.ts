import CellType from './CellType'

class DateCellType extends CellType {
    date: string

    constructor(id: number, type: "date", date: string) {
        super(id, type);
        this.date = date;
    }
}

export default DateCellType;