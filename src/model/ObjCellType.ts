import CellType from './CellType'

class ObjCellType extends CellType {
    title: string
    description: string
    priority: number
    deadline: Date

    constructor(id: number, title: string, description: string, priority: number, deadline: string) {
        super(id)
        this.title = title
        this.description = description
        this.priority = priority
        this.deadline = new Date(deadline)
    }
}

export default ObjCellType;