import CellType from "../model/CellType";
import ObjectiveType from "../model/ObjectiveType";
import DateType from "../model/DateType";
import PlanType from "../model/PlanType";

export function parse(src: any) {
    let cellList: CellType[] = [];

    for(let i=0; i<src.length; i++) {
        if(src[i].type === "objective" || src[i].type === "objective_detail") {
            cellList.push(new ObjectiveType(
                src[i].id, src[i].type, src[i].title, src[i].description, src[i].priority, src[i].deadline
            ))
        }

        if(src[i].type === "plan") {
            cellList.push(new PlanType(
                src[i].id, src[i].type, src[i].objectiveId, src[i].content, src[i].startDate, src[i].endDate, src[i].status
            ))
        }

        if(src[i].type === "date") {
            cellList.push(new DateType(
                src[i].id, src[i].type, src[i].date
            ))
        }
    }

    return cellList;
}