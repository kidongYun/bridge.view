import CellType from "../model/CellType";
import { ObjectiveBuilder } from "../model/ObjectiveBuilder";
import { PlanBuilder } from "../model/PlanBuilder";
import { DateBuilder } from "../model/DateBuilder";

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