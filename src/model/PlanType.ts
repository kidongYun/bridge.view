import CellType from './CellType'

class PlanType extends CellType {
    content: string
    startDate: string
    endDate: string
    status: string

    
    constructor(id: number, content: string, startDate: string, endDate: string, status: string) {
        super(id, "PLAN")
        this.content = content
        this.startDate = startDate
        this.endDate = endDate
        this.status = status
    }
}

export default PlanType