import CellType from "../model/CellType";
import { ObjectiveBuilder } from "../model/ObjectiveType";
import { PlanBuilder } from "../model/PlanType";
import { DateBuilder } from "../model/DateType";
import { TodoBuilder } from "../model/TodoType";

export function parse(src: any) {
    let cellList: CellType[] = [];

    if(src === undefined || src === null) {
        return cellList;
    }

    for(let i=0; i<src.length; i++) {
        if(src[i].type === "OBJECTIVE") {
            cellList.push(
                new ObjectiveBuilder()
                .startDateTime(src[i].startDateTime)
                .endDateTime(src[i].endDateTime)
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
                .startDateTime(src[i].startDateTime)
                .endDateTime(src[i].endDateTime)
                .id(src[i].id)
                .objectiveId(src[i].objectiveId)
                .content(src[i].content)
                .build()
            )
        }

        if(src[i].type === "TODO") {
            cellList.push(
                new TodoBuilder()
                .startDateTime(src[i].startDateTime)
                .endDateTime(src[i].endDateTime)
                .id(src[i].id)
                .planId(src[i].planId)
                .task(src[i].task)
                .build()
            )
        }

        if(src[i].type === "DATE") {
            cellList.push(
                new DateBuilder()
                .startDateTime(src[i].startDateTime)
                .endDateTime(src[i].endDateTime)
                .build()
            )
        }
    }

    return cellList;
}

export function titleOf(day: number) {
    switch(day) {
        case 0:
            return "Sun";
        case 1:
            return "Mon";
        case 2:
            return "Tue";
        case 3:
            return "Wed";
        case 4:
            return "Thu";
        case 5:
            return "Fri";
        case 6:
            return "Sat";
    }
}