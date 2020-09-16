import CellType from "../model/CellType";
import { ObjectiveBuilder } from "../model/ObjectiveType";
import { PlanBuilder } from "../model/PlanType";
import { DateBuilder } from "../model/DateType";

export function parse(src: any) {
    let cellList: CellType[] = [];

    for(let i=0; i<src.length; i++) {
        if(src[i].type === "OBJECTIVE") {
            cellList.push(
                new ObjectiveBuilder()
                .dateTime(src[i].dateTime)
                .id(src[i].id)
                .title(src[i].title)
                .description(src[i].description)
                .priority(src[i].priority)
                .build()
            )
        }

        if(src[i].type === "PLAN") {
            cellList.push(
                new PlanBuilder()
                .dateTime(src[i].dateTime)
                .id(src[i].id)
                .objectiveId(src[i].objectiveId)
                .content(src[i].content)
                .build()
            )
        }

        if(src[i].type === "DATE") {
            cellList.push(
                new DateBuilder()
                .dateTime(src[i].dateTime)
                .build()
            )
        }
    }

    return cellList;
}