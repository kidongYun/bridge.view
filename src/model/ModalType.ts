import CellType from "./CellType";

class ModalType {
    type : string
    isShow: boolean
    cell : CellType | undefined
    setCellList : (cellList: CellType[]) => void

    constructor(type: string, isShow: boolean, cell: CellType | undefined, setCellList: (cellList: CellType[]) => void ) {
        this.type = type
        this.isShow = isShow
        this.cell = cell
        this.setCellList = setCellList
    }
}

export default ModalType