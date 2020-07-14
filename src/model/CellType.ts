class CellType {
    public id: number
    public type: "date" | "plan" | "objective" | "objective_detail"

    constructor(id: number, type: "date" | "plan" | "objective"| "objective_detail") {
        this.id = id
        this.type = type
    }
}

export default CellType;