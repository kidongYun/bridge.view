import Cell from "../data/stores/cell";
import { ObjectiveBuilder } from "../data/stores/objective";
import { PlanBuilder } from "../data/stores/plan";
import { DateBuilder } from "../data/stores/date";
import { TodoBuilder } from "../data/stores/todo";

export function parse(src: any) {
    let cells: Cell[] = [];

    if(src === undefined || src === null) {
        return cells;
    }

    for(let i=0; i<src.length; i++) {
        if(src[i].type === "OBJECTIVE") {
            cells.push(
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
            cells.push(
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
            cells.push(
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
            cells.push(
                new DateBuilder()
                .startDateTime(src[i].startDateTime)
                .endDateTime(src[i].endDateTime)
                .build()
            )
        }
    }

    return cells;
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