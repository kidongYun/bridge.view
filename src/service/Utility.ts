import CellType from "../model/CellType";
import ObjCellType from "../model/ObjectiveType";
import DateCellType from "../model/DateType";
import PlanCellType from "../model/PlanType";

export function parse(src: any) {
    let cellList: CellType[] = [];

    for(let i=0; i<src.length; i++) {
        if(src[i].type === "objective") {
            cellList.push(new ObjCellType(
                src[i].id, src[i].type, src[i].title, src[i].description, src[i].priority, src[i].deadline
            ))
        }

        if(src[i].type === "plan") {
            cellList.push(new PlanCellType(
                src[i].id, src[i].type, src[i].objectiveId, src[i].content, src[i].startDate, src[i].endDate, src[i].status
            ))
        }

        if(src[i].type === "date") {
            cellList.push(new DateCellType(
                src[i].id, src[i].type, src[i].date
            ))
        }
    }

    return cellList;
}