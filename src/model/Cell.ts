import { identifier } from "@babel/types";

class Cell {
    id : number
    title : string
    description : string
    priority : number
    deadline : string

    constructor(id : number, title : string, description : string, priority : number, deadline : string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.deadline = deadline;
    }
}

export default Cell;