import CellType from "./CellType";

class ModalType {
    type : string
    isShow: boolean
    cellList : CellType[]
    setCellList : (cellList: CellType[]) => void

    constructor(type: string, isShow: boolean, cellList: CellType[], setCellList: (cellList: CellType[]) => void ) {
        this.type = type
        this.isShow = isShow
        this.cellList = cellList
        this.setCellList = setCellList
    }
}

export default ModalType