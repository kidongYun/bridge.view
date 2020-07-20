import CellType from './CellType'

class ObjectiveType extends CellType {
    title: string
    description: string
    priority: number
    deadline: string
    status: number

    constructor(id: number, type: "objective" | "objective_detail", title: string, description: string, priority: number, deadline: string) {
        super(id, type)
        this.title = title
        this.description = description
        this.priority = priority
        this.deadline = deadline
        this.status = 0
    }
}

export default ObjectiveType;