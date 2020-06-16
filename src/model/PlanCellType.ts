import CellType from './CellType'

class PlanCellType extends CellType {
    plan: string
    
    constructor(id: number, plan: string) {
        super(id)
        this.plan = plan
    }
}

export default PlanCellType