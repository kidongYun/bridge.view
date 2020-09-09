import CellType from './CellType';

export default class SubjectType extends CellType {
    id: number;
    status: number;
    display: "NORMAL" | "DETAIL";

    constructor(type: string) {
        super(type)
        this.id = -1;
        this.status = 0;
        this.display = "NORMAL";
    }
}