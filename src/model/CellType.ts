class CellType {
    public id: number
    public type: String

    constructor(id: number, type: "OBJECTIVE" | "PLAN" | "DATE" | "CELL") {
        this.id = id
        this.type = type
    }
}

export default CellType;