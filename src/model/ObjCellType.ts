import CellType from './CellType'

class ObjCellType extends CellType {
    title: string
    description: string
    priority: number
    deadline: string
    status: string

    constructor(id: number, title: string, description: string, priority: number, deadline: string) {
        super(id)
        this.title = title
        this.description = description
        this.priority = priority
        this.deadline = deadline
        this.status = ""
    }
}

export default ObjCellType;