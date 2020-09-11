export default class CellType {
    type: string
    dateTime: string

    constructor(type: string) {
        this.type = type;
        this.dateTime = "0000-00-00";
    }

    getDate(): string {
        return this.dateTime.substring(0, 10);
    }
}