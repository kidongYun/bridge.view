import CellType from "../model/CellType";
import ObjectiveType from "../model/ObjectiveType";
import DateType from "../model/DateType";
import PlanType from "../model/PlanType";

export function parse(src: any) {
    let cellList: CellType[] = [];

    for(let i=0; i<src.length; i++) {
        if(src[i].type === "OBJECTIVE") {
            cellList.push(new ObjectiveType(
                src[i].id, src[i].title, src[i].description, src[i].priority, src[i].deadline, "NORMAL"
            ));
        }

        if(src[i].type === "PLAN") {
            cellList.push(new PlanType(
                src[i].id, src[i].content, src[i].startDate, src[i].endDate, src[i].status
            ));
        }

        if(src[i].type === "DATE") {
            cellList.push(new DateType(
                src[i].id, src[i].date
            ));
        }
    }

    return cellList;
}