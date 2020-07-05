import CellType from './CellType'

class PlanCellType extends CellType {
    objectiveId: number
    content: string
    startDate: string
    endDate: string
    status: string

    
    constructor(id: number, objectiveId: number, content: string, startDate: string, endDate: string, status: string) {
        super(id)
        this.objectiveId = objectiveId
        this.content = content
        this.startDate = startDate
        this.endDate = endDate
        this.status = status
    }
}

export default PlanCellType