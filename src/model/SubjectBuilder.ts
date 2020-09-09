import SubjectType from './SubjectType'

export class SubjectBuilder {
    private readonly _subject: SubjectType;
    
    constructor() {
        this._subject = new SubjectType();
    }

    type(type: string): SubjectBuilder {
        this._subject.type = type;
        return this;
    }

    dateTime(dateTime: string): SubjectBuilder {
        this._subject.dateTime = dateTime;
        return this;
    }

    id(id: number): SubjectBuilder {
        this._subject.id = id;
        return this;
    }

    status(status: number): SubjectBuilder {
        this._subject.status = status;
        return this;
    }

    display(display: "NORMAL" | "DETAIL"): SubjectBuilder {
        this._subject.display = display;
        return this;
    }

    build(): SubjectType {
        return this._subject;
    }
}