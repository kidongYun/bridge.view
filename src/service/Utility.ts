import CellType from "../model/CellType";
import ObjCellType from "../model/ObjCellType";
import DateCellType from "../model/DateCellType";
import NotiType from "../model/NotiType";

export function parse(src: any) {
    let cellList: CellType[] = [];

    for(let i=0; i<src.length; i++) {
        if(src[i].title != null) {
            cellList.push(new ObjCellType(
                src[i].id, src[i].title, src[i].description, src[i].priority, src[i].deadline
            ))
        }

        if(src[i].date != null) {
            cellList.push(new DateCellType(
                src[i].id, src[i].date
            ))
        }
    }

    return cellList;
}