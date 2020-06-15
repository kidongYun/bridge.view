import CellType from './CellType'

class ObjCellType extends CellType {
    title: string
    description: string
    priority: number
    deadline: Date

    constructor(id: number, title: string, description: string, priority: number, deadline: Date) {
        super(id)
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.deadline = deadline;
    }
}

export default ObjCellType;