import CellType from './CellType'

class ObjectiveType extends CellType {
    objectiveId: number
    title: string
    description: string
    priority: number
    deadline: string
    status: number

    constructor(cellId: number, type: "objective" | "objective_detail", objectiveId: number, title: string, description: string, priority: number, deadline: string) {
        super(cellId, type)
        this.objectiveId = objectiveId
        this.title = title
        this.description = description
        this.priority = priority
        this.deadline = deadline
        this.status = 0
    }
}

export default ObjectiveType;