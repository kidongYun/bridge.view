export default class CellType {
    private type: string
    private dateTime: string

    constructor(type: string) {
        this.type = type;
        this.dateTime = "0000-00-00";
    }

    getType(): string {
        return this.type;
    }

    setType(type: string) {
        this.type = type;
    }

    getDateTime(): string {
        return this.dateTime;
    }

    setDateTime(dateTime: string) {
        this.dateTime = dateTime;
    }

    getDate(): string {
        return this.dateTime.substring(0, 10);
    }
}