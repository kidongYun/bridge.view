import CellType from './CellType'

class ObjectiveType extends CellType {
    title: string
    description: string
    priority: number
    deadline: string
    status: number
    display: "NORMAL" | "DETAIL"

    constructor(id: number, title: string, description: string, priority: number, deadline: string, display: "NORMAL" | "DETAIL") {
        super(id, "OBJECTIVE")
        this.title = title
        this.description = description
        this.priority = priority
        this.deadline = deadline
        this.status = 0
        this.display = display;
    }
}

export default ObjectiveType;