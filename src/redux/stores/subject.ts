import Cell from './cell';

export default class Subject extends Cell {
    id: number;
    status: number;

    constructor(type: "CELL" | "SUBJECT" | "OBJECTIVE" | "PLAN" | "TODO" | "DATE") {
        super(type)
        this.id = -1;
        this.status = 0;
    }
}

export class SubjectBuilder {
    private readonly subject: Subject;
    
    constructor() {
        this.subject = new Subject("SUBJECT");
    }

    type(type: "CELL" | "SUBJECT" | "OBJECTIVE" | "PLAN" | "TODO" | "DATE"): SubjectBuilder {
        this.subject.type = type;
        return this;
    }

    startDateTime(startDateTime: string): SubjectBuilder {
        this.subject.startDateTime = startDateTime;
        return this;
    }

    endDateTime(endDateTime: string): SubjectBuilder {
        this.subject.endDateTime = endDateTime;
        return this;
    }

    id(id: number): SubjectBuilder {
        this.subject.id = id;
        return this;
    }

    status(status: number): SubjectBuilder {
        this.subject.status = status;
        return this;
    }

    build(): Subject {
        return this.subject;
    }
}